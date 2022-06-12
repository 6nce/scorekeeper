const p1Btn = document.querySelector ('#p1Btn');
const p2Btn = document.querySelector ('#p2Btn');
const resetBtn = document.querySelector ('#resetBtn');
const runningScore = document.querySelector('#score');
const options = document.querySelector('#options')
let player1 = document.querySelector('#player1')
let player2 = document.querySelector('#player2')

let p1Score = 0;
let p2Score = 0;

options.addEventListener('click', (e) => {
    const test = options.value
    console.log(test)
})

const score = document.createElement('h1')


p1Btn.addEventListener('click', (e) => {
    let finalScore = options.value
    p1Score++
    console.log(player1)
    player1.innerText = p1Score
    console.log(player1)
    if (p1Score == finalScore) {
        player1.style.color = "green";
        player2.style.color = "red";
        p1Btn.style.opacity = ".3";
        p2Btn.style.opacity = ".3";
        p1Btn.disabled = "disabled";
        p2Btn.disabled = "disabled";
    }
})

p2Btn.addEventListener('click', (e) => {
    let finalScore = options.value
    p2Score++
    console.log(player1)
    player2.innerText = p2Score
    console.log(player1)
    if (p2Score == finalScore) {
        player2.style.color = "green";
        player1.style.color = "red";
        p1Btn.style.opacity = ".3";
        p2Btn.style.opacity = ".3";
        p1Btn.disabled = "disabled";
        p2Btn.disabled = "disabled";
    }
})


resetBtn.addEventListener('click', (e) => {
    player1.style.color = "black";
    player2.style.color = "black";
    p1Btn.disabled = false;
    p2Btn.disabled = false;
    p1Btn.style.opacity = "";
    p2Btn.style.opacity = "";
    p1Score = 0;
    p2Score = 0;
    player1.innerText = p1Score
    player2.innerText = p2Score
})