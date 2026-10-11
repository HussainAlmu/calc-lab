function greetUser() {
    console.log('hello user')
    text.textContent = 'hello user, welcome'

    text.style.backgroundColor = "green"


    buttonElement.textContent = "zaid"
}

const buttonElement = document.querySelector("#greet-user-button")

console.log(buttonElement)


buttonElement.addEventListener('click', greetUser)



const text = document.querySelector("#greeting-text")

const puls = document.querySelector("#add")
const minus = document.querySelector("#minus")
const cart = document.querySelector("#count")

function pluss() {
    cart.textContent = Number(cart.textContent) + 1
}

function minuss() {
    cart.textContent = Number(cart.textContent) - 1
}

puls.addEventListener("click", pluss)

minus.addEventListener("click", minuss)


console.log(puls)
console.log(minus)
console.log(cart)

const todoItem = document.querySelectorAll(".todo-item")
console.log(todoItem)

function checkToDo(event) {
    console.log(event.target)
    event.target.classList.add('red')
}

for (let index = 0; index < todoItem.length; index++) {
    console.log(todoItem[index])
    todoItem[index].addEventListener('click', checkToDo)
}

const inputtodo = document.querySelector("#todoInput")
const cratetodo = document.querySelector("#todoCrate")
const todolist = document.querySelector(".todo-list")

console.log(inputtodo)
console.log(cratetodo)
console.log(todolist)



function createTodoITem() {
    console.log('function call')
    const newLiElement = document.createElement('li')
    console.log(newLiElement)
    newLiElement.textContent = inputtodo.value
    todolist.appendChild(newLiElement)
    inputtodo.value = ''

}

cratetodo.addEventListener('click', createTodoITem)

// 1. Add the following in your html:

// <input id="number1" type="number">
// <input id="number2" type="number">
// <button id="equals-button">=</button>
// <p id="result">0</p>

// 2. When the user clicks on the = button it should add both numbers together and display the result

const num1 = document.querySelector("#number1")
const num2 = document.querySelector("#number2")
const sum = document.querySelector("#equals-button")
const result = document.querySelector("#result")


console.log(num1)
console.log(num2)
console.log(sum)
console.log(result)

function sumNumbers(){
    number1 = num1.value
    number2 = num2.value
    result.textContent = Number(number1) + Number(number2)
    num1.value = ''
    num2.value = ''
}

sum.addEventListener('click',sumNumbers)