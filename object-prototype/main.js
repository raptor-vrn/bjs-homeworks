function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = Date.now();
    birthday = Date.parse(birthday);
    let diff = now - birthday;
    let age = diff / (86400 * 365 * 1000);

    console.log(age);

    if (age >= 18) {
        return true;
    } else {
        return  false;
    }

}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    if (animal === undefined) {
        return null;
    } else {
        let sound = animal.sound;
        return sound;
    }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let average = 0;
    let tick = 0;
    for (let i = 0; i < marks.length; i++) {
        average += parseFloat(marks[i]);
        tick ++;
    }
    let roundedAverage = Math.round(average / tick);
    return roundedAverage;
}