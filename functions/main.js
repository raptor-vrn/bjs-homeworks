'use strict';

// Task 1

function getSolutions (a, b, c) {
    let D = b**2 - 4 * a * c;

    if (D < 0) {
        return {D};
    } else if (D == 0) {
        let x1 = [-b / (2 * a)];

        return  {roots: x1, D: D};
    } else {
        let array = [];
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (b + Math.sqrt(D)) / (2 * a);

        array.push(x1);
        array.push(x2);

        return {roots: array, D: D};
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.D < 0) {
        console.log('Уравнение не имеет вещественных корней');
    } else if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

// Task 2
let data = {
    algebra: [5, 5, 5, 5, 5, 4],
    geometry: [5, 4, 5],
    russian: [2, 2, 4, 4, 3, 3],
    physics: [3, 4],
    music: [2, 3, 5],
    english: [4, 4, 5],
    poetry: [4, 2, 4],
    chemistry: [3, 3, 3],
    french: [4, 5],
    geography: [5, 4, 4, 4]
}

function getAverageScore(data) {
    function getAverageValue (data) {
        let averageValueSubj = {};

        for (let prop in data) {
            let value = 0;

            for (let i = 0; i < data[prop].length; i++) {
                value += data[prop][i];
            }
            averageValueSubj[prop] = value / data[prop].length;
        }
        return averageValueSubj;
    }

    let averageSubj = getAverageValue (data);
    let sum = 0;
    let tick = 0;

    for (let prop in averageSubj) {
        sum += averageSubj[prop];
        tick++;
    }

    averageSubj.average = sum / tick;
    return averageSubj;
}

getAverageScore(data);

// Task 3

let secretData = {
    aaa: 1,
    bbb: 1
}

function getPersonData(secretData) {

    function getString(secretData) {
        let secretName = {};

        for (let prop in secretData) {
            let number = secretData[prop];

            if (number == 0) {
                number = 'Родриго';
            } else if (number == 1) {
                number = 'Эмильо';
            }

            secretName[prop] = number;
        }
        return secretName;
    }

    let names = getString(secretData);

    names.firstName = names.aaa;
    names.lastName = names.bbb;
    delete names.aaa;
    delete names.bbb;

    return names;
}

console.log(getPersonData(secretData));