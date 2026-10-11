const buttonNumber = document.querySelectorAll('.button.number')
const buttonOp = document.querySelectorAll('.button.operator')
const buttonEquals = document.querySelector('.button.equals')
const Display = document.querySelector('.display')


console.log(buttonNumber)
console.log(buttonOp)
console.log(buttonEquals)
console.log(Display)

let num1 = null
let num2 = null
let op = null



function addnumber(event) {
    console.log(event.target.textContent)
    Display.textContent += event.target.textContent
    if (op === null) {
        num1 = Number(Display.textContent)
        console.log(num1)
    }
    if (op !== null) {
        const valueAfterOp = Display.textContent.split(op).pop()
        num2 = Number(valueAfterOp)
        console.log(num2)
    }
}

for (let index = 0; index < buttonNumber.length; index++) {
    console.log(buttonNumber[index])
    buttonNumber[index].addEventListener('click', addnumber)

}

function operator(event) {
    if (num1 === null) {
        num1 = 0
        Display.textContent = 0
    }
    console.log(num1)
    console.log(event.target.textContent)
    if (op !== null) {
        const operatorIndex = Display.textContent.indexOf(op)
        Display.textContent = Display.textContent.slice(0, operatorIndex)
        num2 = null
    }
    Display.textContent += event.target.textContent
    op = event.target.textContent
    console.log(op)
    if (op === 'C') {
        num1 = null
        num2 = null
        op = null
        Display.textContent = ''

    }


}

for (let index = 0; index < buttonOp.length; index++) {
    console.log(buttonOp[index])
    buttonOp[index].addEventListener('click', operator)
}

function Equals() {
    if (op === '+') {
        sum = num1 + num2
        Display.textContent = sum
        num2 = null
        op = null
        num1 = sum
        console.log(num1)
        console.log(num2)
        console.log(op)



    }
    if (op === '-') {
        sum = num1 - num2
        Display.textContent = sum
         num2 = null
        op = null
        num1 = sum
        console.log(num1)
        console.log(num2)
        console.log(op)



    }
    if (op === '*') {
        sum = num1 * num2
        Display.textContent = sum
         num2 = null
        op = null
        num1 = sum
        console.log(num1)
        console.log(num2)
        console.log(op)


    }
    if (op === '/') {
        sum = num1 / num2
        Display.textContent = sum
         num2 = null
        op = null
        num1 = sum
        console.log(num1)
        console.log(num2)
        console.log(op)


    }
}

buttonEquals.addEventListener('click', Equals)