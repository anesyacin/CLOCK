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
    colors=[#ffd,#ff3,#ddd,#aaa,#bbb,rgb(143, 132, 142),rgb(133, 143, 132),rgb(32, 92, 27),rgb(163, 77, 77),rgb(228, 137, 137),black,rgb(157, 137, 228),rgb(80, 43, 215),rgb(215, 43, 72),rgba(117, 147, 152, 0.607)]
   
    colorChangeElement.style.backgroundColor = colors[Math.floor(Math.random() * colors.length];
}
setInterval(changeBackgroundColor, 1000);
