let form = document.querySelector('#addForm');
let itemList = document.querySelector('#items');
let filter = document.querySelector('#filter')
let empty = document.querySelector('#emptyList')
//check if todoList empty
let isEmpty = function(){
    if(itemList.childElementCount==0){
        empty.appendChild(document.createTextNode('There is nothing to-do. Please add something'));
    }
}
isEmpty()
    

// submit event
form.addEventListener('submit', itemAdd);
// delete event
itemList.addEventListener('click', itemRemove);
// filter event
filter.addEventListener('keyup', itemFilter);

function itemAdd(e){
    e.preventDefault();
    //get input value
    let newItem = document.querySelector('#item').value
    //create new list item
    let li = document.createElement('li');
    //give class
    li.className = 'list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //create delete button
    let deleteBtn = document.createElement('button');
    //give class to button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //add txt to button
    deleteBtn.appendChild(document.createTextNode('x'));
    //append delete button to list item
    li.appendChild(deleteBtn);
    //check if its empty and append li to the list
    if(newItem.length > 0){
        itemList.appendChild(li);
        empty.remove();
    } else{
        alert('Please write something');
    }
}
function itemRemove(e){
    if(e.target.classList.contains('delete')){
        let li = e.target.parentElement
        itemList.removeChild(li);
    }
}
function itemFilter(e){
    let text = e.target.value.toLowerCase();
    let items = itemList.querySelectorAll("li");
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display ='block';
        } else {
            item.style.display ='none';
        }
    });
}
