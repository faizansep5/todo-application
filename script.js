const inputElement = document.querySelector('.todo');
const inputDateElement = document.querySelector('.date');
const buttonElement = document.querySelector('.add');
const todoList = document.querySelector('.show-todo');

const todoArray = JSON.parse(localStorage.getItem('todo')) || [];

const showTodos = () =>{
  //Clear existing items
  todoList.innerHTML = '';
  
  //Loop through the array and display on DOM
  todoArray.forEach((todo, index) => {
    //creating a div element
    const div = document.createElement('div');
    div.textContent = todo.name;

    //creating div element for date
    const divForDate = document.createElement('div');
    divForDate.textContent = todo.dueDate;

    //creating a button element
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.textContent = 'Delete'

    deleteBtn.addEventListener('click',() => {

    // Remove the item from todoArray
    todoArray.splice(index, 1);

    // Update localStorage with the modified todoArray
      localStorage.setItem('todo', JSON.stringify(todoArray));

      showTodos();
    })
    todoList.appendChild(div);
    todoList.appendChild(divForDate)
    todoList.appendChild(deleteBtn)
  });
}

buttonElement.addEventListener('click', () =>{

  const name = inputElement.value;
  const dueDate = inputDateElement.value;

  if(inputElement.value === ''){
    alert('Please add a todo')
  }
    else if(inputElement.value && inputDateElement.value===''){
    alert('Please select a due date')
  }
    else
    {
      todoArray.push(
        { 
          name,
          dueDate
        });

        //localstorage
        localStorage.setItem('todo', JSON.stringify(todoArray))

        inputElement.value = '';
        inputDateElement.value = '';
  }
  
  showTodos();
});

document.addEventListener('DOMContentLoaded', () => { 
  showTodos();
})