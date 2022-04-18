import {showMessage} from './messages.js'
import { getTasks } from './handleLocalStorage.js'
import { removeTask } from './handleLocalStorage.js'

const add = document.getElementById('add')
const modal = document.querySelector('.modal')
const close = document.getElementById('close')
const newTask = document.getElementById('new-task')
const taskName = document.getElementById('task-name')
const priority = document.getElementById('priority')
const dueDate = document.getElementById('due-date')
const projectOption = document.getElementById('project-option')
const description = document.getElementById('description')
const listDisplay = document.getElementById('list-display')
const listArea = document.getElementById('list')

const taskArr = getTasks()
let i = 0
let id = Date.now()

newTask.addEventListener('click', (e) => {
    e.preventDefault()
    
    if(taskName.value === '' ||dueDate.value ===''||description.value ===''){
    
        showMessage('Fields must not be empty', 'error')
        
    
   }else{
        const task = new Task(id,taskName.value,priority.value,dueDate.value,projectOption.value,description.value)

        updateTask(task)
        addTask()
        modal.classList.remove('active')
        add.classList.remove('inactive')
        reset()
        showMessage('Task added', 'success')
   }

    
})

taskArr.forEach(task => addTask(task))

add.addEventListener('click', () =>{
    modal.classList.add('active')
    add.classList.add('inactive')
    
})

close.addEventListener('click', () => {
    modal.classList.remove('active')
    add.classList.remove('inactive')
})

function Task(id,taskName,priority,dueDate,projectOption,description){
    this.id = id
    this.taskName = taskName
    this.priority = priority
    this.dueDate = dueDate
    this.projectOption = projectOption
    this.description = description
}

function addTask(){
    const taskItem = document.createElement('div')
    taskItem.classList.add(`${taskArr[i].priority}`)
    taskItem.classList.add('task')
    taskItem.innerHTML = `
        <p><i class="fa-solid fa-file"></i>${taskArr[i].taskName}</p>
        <p><i class="fa-solid fa-circle-exclamation"></i>${taskArr[i].priority}</p>
        <p><i class="fa-solid fa-calendar"></i>${taskArr[i].dueDate}</p>
        <p><i class="fa-solid fa-folder"></i>${taskArr[i].projectOption}</p>
        <p class="info"></i>${taskArr[i].description}</p>
        <p class="id">${taskArr[i].id}</p>
        <div class="icons">
            <i class="fa-solid fa-pencil" id="edit"></i>
            <i class="fa-solid fa-trash-can" id="delete"></i>
        </div>
    `
    i++
 

   listArea.appendChild(taskItem)
}

   listArea.addEventListener('click', (e) => {
        let item = e.target
    
        if(item.classList.contains('fa-trash-can')){
            item.parentElement.parentElement.remove()
            removeTask(e.target.parentElement.previousElementSibling.textContent)
            showMessage('Task deleted', 'success')
        }else if(item.classList.contains('fa-pencil')){
            editItem()
        }
    
})

const editItem = (e) =>{
    const task = document.querySelector('.task')
    let itemInput = document.createElement('input')
    itemInput.type = 'text'
    itemInput.value = taskName.value
    // task.insertBefore(itemInput, task.firstChild)
    showMessage('Feature currently unavailable', 'error')
    
}

function reset(){
    taskName.value = ''
    projectOption.value = ''
    description.value = ''
    dueDate.value = ''
}

function updateTask(task){
    taskArr.push(task)
    localStorage.setItem('tasks', JSON.stringify(taskArr))
}
