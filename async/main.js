const setDailyRhythm = (wakeUpTime, bedTime) => {
    const goodMorning = () => alert('Доброе утро!');
    const goodNight = () => alert('Спокойной ночи!');
    const checkMorningTime = setAlarm(wakeUpTime, goodMorning);
    const checkNightTime = setAlarm(bedTime, goodNight);

    const currentTime = () => {
        const currentDate = new Date();
        const getCurrentTime = currentDate.toLocaleTimeString('en-GB',  {hour: '2-digit', minute:'2-digit'});

        return getCurrentTime;
    }

    setInterval(() => {
        checkMorningTime(currentTime());
    }, 1000);

    setInterval(() => {
        checkNightTime(currentTime());
    }, 1000);
}

const setAlarm = (time, callback) => {
    return (getCurrentTime) => {
        if (getCurrentTime === time) callback()
    };
}

setDailyRhythm("16:11", "16:12");