export function getTasks(){
    let tasks

    if(localStorage.getItem('tasks') === null){
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    return tasks
}

export function removeTask(id){
    const tasks = getTasks()

    tasks.forEach((task, index) =>{
        if(task.id == id){
            tasks.splice(index, 1)
           
        }
        
    })
    
    localStorage.setItem('tasks', JSON.stringify(tasks))
    
}