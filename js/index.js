const num1 = Math.ceil(Math.random()*10);
console.log(num1);
const num2 = Math.ceil(Math.random()*10);
console.log(num2);
const question123 = document.getElementById("question")
console.log(question123);
const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");


const scoreEl = document.getElementById("score")
let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}
scoreEl.innerText = `score: ${score}`
question123.innerText = `What is ${num1} multiply by ${num2}?`

const correctAns = num1 * num2;

formEl.addEventListener("submit", () => {
const userAns = +inputEl.Value;
if(userAns === correctAns) {
    score++;
    updateLocalStorage()
} else {
    score--;
    updateLocalStorage()
}
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
};