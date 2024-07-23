function Clock(){ 
const d = new Date();
const hour = d.getHours() * 30+ d.getMinutes() / 2;
const min = d.getMinutes() * 6+ d.getSeconds() / 10;
const sec = d.getSeconds() * 6;
document.getElementById('secondes').style.transform= `rotate(${sec}deg)`
document.getElementById('minutes').style.transform= `rotate(${min}deg)`
document.getElementById('hours').style.transform= `rotate(${hour}deg)`
}
Clock();
setInterval(Clock,1000);
let i = 0;

function changeBackgroundColor() {
    i = (i + 1) % 2;
    const colors = ['#7a5a5a', 'rgba(27, 31, 32, 0.74)'];
    
    const colorChangeElement = document.getElementById('colorChangeElement');
    colorChangeElement.style.backgroundColor = colors[i];
    const clockElements = document.getElementsByClassName('clock');
    for (let j = 0; j < clockElements.length; j++) {
        clockElements[j].style.color = colors[(i + 1) % 2];
        
    }
    document.getElementById('H1').style.color = colors[(i + 1) % 2];
}

setInterval(changeBackgroundColor, 1000);
