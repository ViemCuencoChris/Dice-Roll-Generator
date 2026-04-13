const displayResults = document.querySelector(".display_results");
const displayImages = document.querySelector(".display_images");

function btnRoll(){
    const diceNum = Number(document.getElementById("rollInt").value);
    const dR = [];
    const dI = [];

    if (diceNum <= 0) {
        displayResults.textContent = "Roll at least 1 die!";
        displayImages.innerHTML = "";
        return;
    } else if (diceNum > 100){
        displayResults.textContent = "Roll no more than 100!";
        displayImages.innerHTML = "";
        return;
    }

    for(let i = 0; i < diceNum; i++){
        const num = Math.floor(Math.random() * 6)+1;

        dR.push(num);
        dI.push(`<img src="assets/${num}.png" alt="Dice ${num}">`);
    }
    
    displayResults.textContent = `Dices Rolled: ${dR.join(", ")}`;
    displayImages.innerHTML = dI.join("");
}