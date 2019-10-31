'use strict'

let date = new Date();
let hourNow = date.getHours();
let minNow = date.getMinutes();
let timeNow = `${hourNow}:${minNow}`;

function setDailyRhythm(wakeUpTime, bedTime) {
    if (timeNow === wakeUpTime) {
        goodMorning();
    } else if (timeNow === bedTime) {
        goodNight();
    }
}

function setAlarm(time, callback) {

    if (timeNow === time) {
        callback()
    }

}

const goodMorning = () => alert('Доброе утро!'),
    checkTime = setAlarm('20:33', goodMorning);

const goodNight = () => alert('Спокойной ночи!'),
    checkTime2 = setAlarm('22:30', goodNight);

setDailyRhythm('22:30', '22:33');