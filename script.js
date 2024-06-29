const dt = document.querySelector(".date")
const tm = document.querySelector(".time")
const clk = document.getElementById("clk")
const arm = document.getElementById("arm")
const clock = document.querySelector(".clock")
const alarm = document.querySelector(".alarm")
const hour = document.querySelector("#hour")
const minute = document.querySelector("#minute")
const second = document.querySelector("#second")

function displayDate(){
    let date = new Date()
    date = date.toString().split(" ")

    dt.innerHTML = date[0] + " " + date[1] + " " + date[2] + " " + date[3]
    tm.innerHTML = date[4]
    console.log(date)
}

setInterval(displayDate,1000)
displayDate()


setInterval(() => {
    let d = new Date()
    let htime = d.getHours()
    let mtime = d.getMinutes()
    let stime = d.getSeconds()
    let hrotation = 30*htime + mtime/2
    let mrotation = 6*mtime
    let srotation = 6*stime  

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`
}, 1000)
