export const showMessage = (message, statusName) => {
    const item = document.createElement('div')
    item.classList.add(statusName)
    item.innerText = message

    const container = document.querySelector('.container')
    container.appendChild(item)

    setTimeout(() => item.remove(), 5000)
}

