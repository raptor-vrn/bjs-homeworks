'use strict';

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    if (parseFloat(percent) >= 0 || parseFloat(percent)) {
        percent = parseFloat(percent) / 100;
    } else {
        return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    }

    if (parseFloat(contribution) >= 0 || parseFloat(contribution)) {
        contribution = parseFloat(contribution);
    } else {
        return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
    }

    if (parseFloat(amount) >= 0 || parseFloat(amount)) {
        amount = parseFloat(amount);
    } else {
        return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
    }

    if (!date) {
        return `Параметр "Срок ипотеки" содержит неправильное значение ${date}`;
    }

    let numberMonths = Math.round((Date.parse(date) / (86400 * 30 * 1000)) - ((new Date().getTime()) / (86400 * 30 * 1000)));

    if(numberMonths <= 0 ) {
        return `Параметр "Дата" содержит неправильное значение ${date}`;
    }

    let totalAmount = amount - contribution;

    if (totalAmount > 0) {
        let sumMonth = sumCredit * ((percent * 1 / 12)+(percent * 1 / 12)/(((1+(percent * 1 / 12)) ** numberMonths) -1 ));
        totalAmount = (sumMonth * numberMonths + contribution).toFixed(2);
    } else {
        totalAmount = 0;
    }

    console.log(totalAmount);
    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    let greeting;

    if(typeof name === 'string' && name.length > 1 && name != 'null' && name != 'undefined'){
        greeting = `Привет, мир! Меня зовут ${name}.`;
    } else {
        greeting = `Привет, мир! Меня зовут Аноним.`;
    }

    console.log(greeting);
    return greeting;
}