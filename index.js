const inputElement = document.querySelector(".tarefa")
const buttonElement = document.querySelector(".button-addTask")
const ul = document.querySelector(".ul-task")

buttonElement.onclick = ev => {
    ev.preventDefault();

    if(inputElement.value === "") {
        alert("Escreva uma tarefa")
    } 

    const TextElement = document.createElement("span")
    TextElement.innerHTML = inputElement.value

    const btnRemover = document.createElement("button")
    btnRemover.innerHTML = "Remover"

    const liElement = document.createElement("li")

    liElement.appendChild(TextElement)
    liElement.appendChild(btnRemover)

    //Remover task
    btnRemover.onclick = () => {
        ul.removeChild(liElement)
    }

    ul.appendChild(liElement)

    inputElement.value = ""
}


