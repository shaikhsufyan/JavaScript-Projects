setInterval(()=>{
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    
    let hRotation = 30*hour+minute/2
    let mRotation = 6*minute
    let sRotation = 6*second

    document.getElementById("hour").style.transform=`rotate(${hRotation}deg)`
    document.getElementById("minute").style.transform=`rotate(${mRotation}deg)`
    document.getElementById("second").style.transform=`rotate(${sRotation}deg)`



},1000)