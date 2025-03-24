const input=document.getElementById("input")
const button=document.getElementById("btn")
const items=document.getElementById("items")
const todos=[]
button.addEventListener('click',()=>{
    todos.push(input.value);
    addtodo(input.value);
   input.value=' '
});
function addtodo(todo){
    const task=document.createElement("div")
     items.appendChild(task)
    const para=document.createElement("p")
    para.innerText=todo
    task.appendChild(para)
   const del=document.createElement("button")
    del.innerText="Delete"
    
    task.appendChild(del)
    del.classList.add("one")
    para.classList.add("two")
    task.classList.add("task")

    para.addEventListener('dblclick',()=>{
      if(para.style.textDecoration=="none"){
        para.style.textDecoration="line-through"
      }
      else{
        para.style.textDecoration="none"
      }
        
    })

    del.addEventListener('click',()=>{
        task.remove()
        task.removeChild(del)
    })
    
}
