
const secondHand = document.querySelector('.second-hand');
console.log(secondHand);

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds(); 
    const secondsDegrees = (seconds / 60 *360)
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
}

setInterval(setDate,1000);