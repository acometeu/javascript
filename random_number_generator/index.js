document.getElementById("myH1").textContent = `Hi random`;

const randomBtn = document.getElementById("randomBtn");
const numberLabel1 = document.getElementById("numberLabel1");
const numberLabel2 = document.getElementById("numberLabel2");
const numberLabel3 = document.getElementById("numberLabel3");

randomBtn.onclick = function(){
    numberLabel1.textContent = Math.floor(Math.random() * 6 + 1);
    numberLabel2.textContent = Math.floor(Math.random() * 6 + 1);
    numberLabel3.textContent = Math.floor(Math.random() * 6 + 1);
}