setInterval(()=>{
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let hRotation = 30*hours+minutes/2;
    let mRotation = 6*minutes;
    let sRotation = 6*seconds;

    document.getElementById("hour").style.transform=`rotate(${hRotation}deg)`;
    document.getElementById("minute").style.transform=`rotate(${mRotation}deg)`;
    document.getElementById("second").style.transform=`rotate(${sRotation}deg)`;

},1000)