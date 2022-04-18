const listFilter = document.getElementById('list-display')
const list = document.getElementById('list')

listFilter.addEventListener('click', filterFunc)


function filterFunc (e){
    
    const priorityItems = list.childNodes;
    priorityItems.forEach( item => {
        switch(e.target.value){
            case 'all':
                item.style.display = 'block'
                break
            case 'critical':
                if(item.classList.contains('critical')){
                    item.style.display = 'block'
                }else{
                    item.style.display = 'none'
                }
                break
            case 'high':
                if(item.classList.contains('high')){
                    item.style.display = 'block'
                }else{
                    item.style.display = 'none'
                }
                break
            case 'medium':
                if(item.classList.contains('medium')){
                    item.style.display = 'block'
                }else{
                    item.style.display = 'none'
                }
                break
            case 'low':
                if(item.classList.contains('low')){
                    item.style.display = 'block'
                }else{
                    item.style.display = 'none'
                }
                break
        }
        
    })

   
}