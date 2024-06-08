/*let button=document.getElementById("add");
let inp=document.getElementById("inp");
let todos=document.getElementById("todos");
let todo_array=[]
button.addEventListener("click",()=>{
    todo_array.push(inp.value);
    add_todo(inp.value);
})

function add_todo(to_value){
      let para=document.createElement("p");
      para.innerText=to_value;
      todos.appendChild(para);
      para.addEventListener("click",()=>{
        para.style.textDecoration="line-through";
      })
      para.addEventListener("dblclick",()=>{
        todos.removeChild(para);
        remove(to_value);
      })
}

function remove(to_value){
    let index=todo_array.indexOf(to_value);
    
        //todo_array.splice(index,1)
        todo_array.pop(index);
    
}*/


let button = document.getElementById('add')
let tododiv = document.getElementById('todos')
let input = document.getElementById('inp');
//local storage,cookies
let todos_array = [];
window.onload = ()=>{
    todos_array = JSON.parse(localStorage.getItem('todos')) || []
    todos_array.forEach(todo=>addtodo(todo))
}

button.addEventListener('click',()=>{
    todos_array.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos_array))
    addtodo(input.value)
    input.value=''
})

function addtodo(todo){
    let para = document.createElement('p');
    para.innerText = todo;
    tododiv.appendChild(para)
    
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        tododiv.removeChild(para)
        remove(todo)
    })
}

function remove(todo){
    let index = todos_array.indexOf(todo);
  
    todos_array.pop(index);
      
    localStorage.setItem('todos',JSON.stringify(todos_array))
}