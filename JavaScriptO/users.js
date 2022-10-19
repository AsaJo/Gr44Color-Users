let idCounter = 4;
let inputElement, allUsersElement;


let users=[
    {
        firstName:'Zelda',
        id:1,
        age:23
    },
    {
        firstName:'Mona-Lisa Harddrive',
        id:2,
        age:45
    },
    {
        firstName:'Jimi Hendrix',
        id:3,
        age:100
    },
    {
        firstName:'Darth Vader',
        id:4,
        age:1
    }
];
console.log(users);

// Function init add user add button add input
function init(){
    addUsers();
    addButton();
    addInput();
  }
  
  function addUsers(){
    users.forEach(function(user){
      addUserElements(user);
    })
  }
  
  function addUserElements(user){
    allUsersElement = document.getElementById('all-users');
  
    let userWrapperElement = document.createElement('div');
    userWrapperElement.setAttribute('class', 'user-wrapper');
    userWrapperElement.setAttribute('title', allUsersElement.children.length);
  
    let deleteButton =  initDeletebutton();
    
    let userH3Element = document.createElement('h3');
    userH3Element.innerText = user.firstName;
    
    let userIdElement = document.createElement('p');
    userIdElement.innerText = 'id:' + user.id;
  
    let userAgeElement = document.createElement('p');
    userAgeElement.innerText = 'age:' + user.age;
  
    allUsersElement.appendChild(userWrapperElement);
    userWrapperElement.appendChild(deleteButton);
  
    userWrapperElement.appendChild(userH3Element);
    userWrapperElement.appendChild(userIdElement);
    userWrapperElement.appendChild(userAgeElement);
  }
  
  function initDeletebutton(){
    let deleteButton = document.createElement('p');
    deleteButton.innerText = 'X';
    deleteButton.className = 'delete';
    deleteButton.addEventListener('click', removeUser);
  
    return deleteButton;
  }
  
  function addButton(){
    let addButtonElement = document.createElement('button');
    addButtonElement.className = 'add-btn';
    addButtonElement.textContent = 'Press to add user!';
  
    document.body.appendChild(addButtonElement);
    addButtonElement.addEventListener('click', addUser);
  }
  
  function addUser(){
    if(inputElement.value !== '' && isNaN(Number(inputElement.value))){
      idCounter++;
  
      let newUser ={
        firstName: inputElement.value,
        id: idCounter,
        age: getAge()
      };
    
      users.push(newUser);
      addUserElements(newUser);
    } else {
      alert(inputElement.value + ' is not a valid name, fool!');
    }
  }
  
  function addInput(){
    let labelElement = document.createElement('label');
    labelElement.textContent = 'Full name:';
  
    inputElement = document.createElement('input');
    inputElement.setAttribute('name', 'fullName');
    inputElement.setAttribute('type', 'text');
  
    document.body.insertBefore(inputElement, document.body.children[0]);
    document.body.insertBefore(labelElement, document.body.children[0]);
  }
  
  function getAge(){
    return Math.floor(Math.random() * 1000) +1;
  }
  
  function removeUser(event){
    users.splice(event.target.parentElement.title, 1);
    allUsersElement.removeChild(event.target.parentElement);  
  }
  
  document.addEventListener('DOMContentLoaded', init);