//cssleri body dark mode içine yaz
//enum a bak
//template literalsa bak
//add functionı kısalt
//git commite bak


//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const headerInput = document.querySelector('.header-input');
const darkModeButton = document.querySelector('.darkmodeBtn');
const filterOption = document.querySelector('.filter-todo')
const empty = document.querySelector('.empty');
const body = document.body;
//event listener
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
    if(body.classList.contains('dark-mode')){
        todoDiv.classList.add("todo");
        todoDiv.classList.add("darkmode");
    } else {
        todoDiv.classList.add("todo");
    }
    
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
    if(todoInput.value.length==0){
        alert('Please write something');
        return;
    }
    todoList.appendChild(todoDiv);
    //clear input value after add to list
    todoInput.value ="";
    //when you add something hide empty list notification
    if(todoList.childElementCount >= 1){
        empty.style.display = 'none';
    }
}

// delete function
    function deleteTodo(event){
        if(event.target.classList.contains('trash-btn')){
            event.target.parentElement.classList.add('fall');
            event.target.parentElement.addEventListener('transitionend', function(){
                event.target.parentElement.remove()
                if(todoList.childElementCount == 0){
                    empty.style.display = 'flex';
                }
            });
        }
    }

// checkmark
    function checkTodo(event){
        if(event.target.classList.contains('complete-btn')){
            event.target.parentElement.classList.toggle('completed');
            event.target.parentElement.style.order = todoList.children.length
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

//dark mode
function darkMode() {
    let body = document.body;
    body.classList.toggle("dark-mode");
    this.classList.toggle('fa-sun');
    todoInput.classList.toggle('darkmode');
    todoButton.classList.toggle('darkmode');
    for(var i=0;i<todoList.children.length;i++){
        todoList.children[i].classList.toggle('darkmode')
    }
}


