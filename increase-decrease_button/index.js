// console.log(`~hello`);
// console.log(`poulet`);

// window.alert(`This is an alert !`)
// window.alert(`This is an alert !!!!!!!!!!`)

document.getElementById("myH1").textContent = `Hi random`;
// document.getElementById("myP").textContent = `goodbye`;

// let username;

// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hi ${username}`;
// }

let number = 0;
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const numberLabel = document.getElementById("numberLabel");

decreaseBtn.onclick = function(){
    number--;
    numberLabel.textContent = number;
}

resetBtn.onclick = function(){
    number = 0;
    numberLabel.textContent = number;
}

increaseBtn.onclick = function(){
    number++;
    numberLabel.textContent = number;
}