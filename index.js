const day = document.querySelector("#days")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const second = document.querySelector("#second")
console.log(day,hours,minutes,second)
const newDay = 'June 20, 2022'
function timeCountDown() {
    const nowDate = new Date().getTime();
    const newYearDate = new Date(newDay).getTime();
    
    const gap = newYearDate - nowDate
    
    const sc= 1000;
    const mn = sc * 60
    const hour = mn * 60
    const days = hour * 24
    const textDay = Math.floor(gap/days)
    const textHour = Math.floor((gap % days) / hour)
    const textMinute = Math.floor((gap % hour) / mn)
    const textSecond = Math.floor((gap % mn) /sc)
    
    day.innerHTML = textDay
    hours.innerHTML = textHour
    minutes.innerHTML = textMinute
    second.innerHTML = textSecond
  }
  
  
  timeCountDown()
  