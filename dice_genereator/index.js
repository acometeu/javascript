const dicerollerInput = document.getElementById("dicerollerInput");
const dicerollerButton = document.getElementById("dicerollerButton");
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");


function rollDice(){

    const nbrofDice = dicerollerInput.value;
    const values = [];
    const images = [];

    for(let i = 0; i < nbrofDice; i++){
        const value = Math.floor(Math.random() * 6 + 1);
        values.push(value);
        images.push(`<img src="dices_images/${value}.png" alt="Dice ${value}">`)
    }

    diceResult.textContent = `dices: ${values.join(', ')}`;
    diceImages.innerHTML = images.join("");

}