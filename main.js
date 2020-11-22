//selectors
let todoInput = document.querySelector('.todo-input');
let todoButton = document.querySelector('.todo-button');
let todoList = document.querySelector('.todo-list');
let headerInput = document.querySelector('.header-input');
let darkModeButton = document.querySelector('.darkmodeBtn');
let filterOption = document.querySelector('.filter-todo')
//var fired=false;


//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteTodo);
todoList.addEventListener('click',checkTodo);
darkModeButton.addEventListener('click',darkMode);
filterOption.addEventListener('click', filterTodo)

//functions
function addTodo(event){
    //prevent submit
    event.preventDefault();
    //to-do div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //create buttons
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append todoDiv to ul
    todoList.appendChild(todoDiv);
    //empty value
    todoInput.value ="";
}

// delete function
    function deleteTodo(event){
        
        if(event.target.classList.contains('trash-btn')){
                event.target.parentElement.classList.add('fall');
                
                event.target.parentElement.addEventListener('transitionend', function(){
                    event.target.parentElement.remove()
                })
                removeLocalTodos(todo);
        }
    }
// checkmark
    function checkTodo(event){
        if(event.target.classList.contains('complete-btn')){
            event.target.parentElement.classList.add('completed');
        }
    }
// filter to do
function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value) {
            case "all":
                todo.style.display ="flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
        }
    });
}

//removetype
//    function removeType(event){
//        if(!fired){
//            fired=true;
//            let deleteTxt = document.createElement('button');
//            deleteTxt.innerHTML = '<i class="fas fa-trash"></i>';
//            deleteTxt.classList.add('deleteTxt')
//            headerInput.insertBefore(deleteTxt,headerInput.firstChild)
//            console.log('1 oldu');        
//        } else if(todoInput.value.length===0){
//            console.log('0 oldu');
//            deleteTxt.remove();
//        }
//        
//    }

function darkMode() {
    let body = document.body;
    body.classList.toggle("dark-mode");
    this.classList.toggle('fa-sun');
    todoInput.classList.toggle('darkforminput');
    todoButton.classList.toggle('darkforminput');
}


