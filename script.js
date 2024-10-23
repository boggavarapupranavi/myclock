setInterval(() => {
    d=new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    hrotation=30*h + m/2;
    mrotation=6*m;
    srotation=6*s;
    hour.style.transform=`rotate(${hrotation}deg)`;
    minutes.style.transform=`rotate(${mrotation}deg)`;
    seconds.style.transform=`rotate(${srotation}deg)`;
    seconds.style.animatiom=`1s linear infinite`;
    presentTime = `${h}:${m}:${s}`;
    document.getElementById('time').textContent = presentTime;
}, 1000);

