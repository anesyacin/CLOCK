function Clock(){ 
    const d = new Date();
    const hour = d.getHours() * 30+ d.getMinutes() / 2;
    const min = d.getMinutes() * 6+ d.getSeconds() / 10;
    const sec = (d.getSeconds() + d.getMilliseconds() / 1000) * 6;
    document.getElementById('secondes').style.transform= `rotate(${sec}deg)`
    document.getElementById('minutes').style.transform= `rotate(${min}deg)`
    document.getElementById('hours').style.transform= `rotate(${hour}deg)`
    }
    Clock();
    setInterval(Clock,100);
