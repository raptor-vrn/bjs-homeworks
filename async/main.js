'use strict'

const setDailyRhythm = (wakeUpTime, bedTime) => {

    const goodMorning = () => alert('Доброе утро!');
    const goodNight = () => alert('Спокойной ночи!');
    const checkMorningTime = setAlarm(wakeUpTime, goodMorning);
    const checkNightTime = setAlarm(bedTime, goodNight);

    setInterval(checkMorningTime, 1000);
    setInterval(checkNightTime, 1000);
}

const setAlarm = (time, callback) => {
    return () => {
        const currentDate = new Date();
        const getCurrentTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

        if (getCurrentTime === time) callback()
    };
}

setDailyRhythm("07:11", "22:11");