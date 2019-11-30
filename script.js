'use strict';
let moneyData, timeData;

function start() {
    moneyData = prompt("Ваш бюджет на місяць?");
    timeData = prompt("Введіть дату YYYY-MM-DD");

    while (isNaN(moneyData) || moneyData == "" || moneyData == null) {
        moneyData = +prompt("Ваш бюджет на місяць?", '');
    }
}

start();

let appData = {
    budget: moneyData,
    timeData: timeData,
    expenses: {},
    optionalExpenses: {},
    monthIncome: [],
    savings: true,
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введіть обов'язкову статтю витрат");
        let b = prompt("У скільки обійдеться?");

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' & a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
            appData.budget -= b;
        } else {
            console.log('bad result');
            i--;
        }
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert("Бюджет на день: " + appData.moneyPerDay + "грн");
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 300) {
        console.log("Це мінімальний рівень достатку!");
    } else if (appData.moneyPerDay > 300 && appData.moneyPerDay < 2000) {
        console.log("Це середній рівень достатку!");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Це високий рівень достатку!");
    } else {
        console.log("Щось пішло не так...!");
    }
}
detectLevel();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Яка сума накопичувань?'),
            percent = +prompt('Який відсоток?');

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Дохід в місяць з Вашого депозиту: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    let a = prompt('Стаття необов\'язкових витрат?');
    appData.optionalExpenses[1] = a;
}

chooseOptExpenses()