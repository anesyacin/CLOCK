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
const colorChangeElement = document.getElementById('colorChangeElement');

function changeBackgroundColor() {
    const letters = '0123456789ABCDEF';
    let color='#';
    
    for (let i = 0; i < 3; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    colorChangeElement.style.backgroundColor = color;
}
setInterval(changeBackgroundColor, 1000);