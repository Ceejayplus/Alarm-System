const newTime = () => {
    const hou = (new Date().toLocaleTimeString())
    normalTime.innerHTML = `${hou}`
    normalTime.style.color = "grey"
    normalTime.style.fontWeight = "900"
    normalTime.style.fontSize = "40px"
}
setInterval(newTime, 1000);




let myAlarmSong = new Audio("Kizz-Daniel-Buga-Dont-Sleep-No-Sleep-Wake-Up-Collect-Your-Money-Ft-Tekno.mp3")
let notCorrectAnswer = new Audio("invalid.m4a")

const setAlarm = () =>{
    let myHours = Hours.value;
    let myMinutes = Minutes.value;
    // let mySeconds = Seconds.value;
    n = new Date();
    if(myHours == n.getHours() && myMinutes == n.getMinutes()){
        myAlarmSong.play()
    }
    setTimeout(setAlarm, 1000);
}

const stopAlarm = () =>{
    alert('Solve this equation')
    let stp = prompt("If 50 * 10 = 500, What is 50 * 10 + 500 + 500");
    if (stp == 1500){
        myAlarmSong.p()
        alert('Alaye wakeup jare, lazy bone')
        location.reload() 
    }else{[]
        alert('Rest in Peace')
        myAlarmSong.pause()
        notCorrectAnswer.play()
        notCorrectAnswer.loop
    }
}