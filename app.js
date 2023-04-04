const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    // console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    // math.floor rounds decimal numbers down to a whole number. Math.random randomly chooses number of a color that will display on the background. 
    return Math.floor(Math.random() * colors.length);
}
