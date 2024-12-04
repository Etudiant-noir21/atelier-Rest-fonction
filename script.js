const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList')

window.onload = ()=>{
    getTask()
}
addTaskBtn.addEventListener('click',(event)=>{
    
event.preventDefault()
createElement(taskInput.value)
saveTask(taskInput.value)
Rest('Aller en Atelier',"suivre les tache","etre a jour")
taskInput.value = ''
})

function createElement(task){
const li = document.createElement('li')
li.textContent = task
taskList.appendChild(li)
}

// sauvegarde dans le localStorage

function saveTask(task){
let save = JSON.parse(localStorage.getItem('taches'))||[]
if(!Array.isArray(save)){
    save = []
}
save.push(task)
localStorage.setItem('taches',JSON.stringify(save))
}

// recuperation dans le localStorage

function getTask(){
    let save = JSON.parse(localStorage.getItem('taches'))||[]
    if(!Array.isArray(save)){
        save = []
    }
  save.forEach(element => {
    createElement(element)
  });
}

// Rest Parameters

function Rest(...variadique){
    variadique.forEach(task=>{
        const li = document.createElement('li')
        li.textContent = task
        taskList.appendChild(li)
    })
return variadique
}