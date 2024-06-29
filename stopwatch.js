const duration = document.querySelector("#stpDuration")
const start = document.querySelector("#start")
const reset = document.querySelector("#reset")
const lap = document.querySelector("#lap")
const Stop = document.querySelector("#stop")
const laps = document.querySelector("#laps")

let hrs=0,mins=0,sec=0,ms=0,timeinterval

start.addEventListener("click", () => {
    timeinterval = setInterval( () => {
        ms++
        if(ms == 100){
            sec++
            ms=0
        }
        if(sec == 60){
            mins++
            sec=0
        }
        if(mins == 60){
            hrs++
            mins = 0
        }

        let msString = ms < 10 ? `0${ms}` : ms;
        let secString = sec < 10 ? `0${sec}` : sec;
        let minsString = mins < 10 ? `0${mins}` : mins;
        let hrsString = hrs < 10 ? `0${hrs}` : hrs;

        duration.innerHTML = `${hrsString} : ${minsString} : ${secString} : ${msString}`

    },10 )

    start.setAttribute("style","display:none");
    Stop.setAttribute("style","display:block");
    lap.setAttribute("style","display:block");
    reset.setAttribute("style","display:none");
    lap.removeAttribute("disabled");
})

let count = 0

lap.addEventListener("click", () => {
    count++
    let li = document.createElement('li')

    let msString = ms < 10 ? `0${ms}` : ms;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minsString = mins < 10 ? `0${mins}` : mins;
    let hrsString = hrs < 10 ? `0${hrs}` : hrs;

    li.innerHTML = `#${count} - ${hrsString} : ${minsString} : ${secString} : ${msString}`

    laps.appendChild(li)
    laps.scroll({ top: laps.scrollHeight, behavior: "smooth" })
})

Stop.addEventListener("click", () => {
    clearInterval(timeinterval)
    lap.setAttribute("style","display:none")
    Stop.setAttribute("style", "display:none")
    start.setAttribute("style", "display:block")
    start.innerHTML = "Resume"
    reset.setAttribute("style", "display:block")
})

reset.addEventListener("click", () => {
    laps.innerHTML = ""
    clearInterval(timeinterval)
    hrs=mins=sec=ms=0
    duration.innerHTML = "00 : 00 : 00 : 00"

    start.setAttribute("style","display: block")
    start.innerHTML = "Start"
    reset.setAttribute("style", "display: none")
    lap.setAttribute("style", "display:block")
    lap.setAttribute("disabled",true)
    Stop.setAttribute("style", "display: none")
    count = 0
})

