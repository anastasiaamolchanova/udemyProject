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
    income: [],
    savings: true,
    chooseExpenses: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert("Бюджет на день: " + appData.moneyPerDay + "грн");
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 300) {
            console.log("Це мінімальний рівень достатку!");
        } else if (appData.moneyPerDay > 300 && appData.moneyPerDay < 2000) {
            console.log("Це середній рівень достатку!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Це високий рівень достатку!");
        } else {
            console.log("Щось пішло не так...!");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Яка сума накопичувань?'),
                percent = +prompt('Який відсоток?');

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Дохід в місяць з Вашого депозиту: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        {
            for (let i = 1; i <= 3; i++) {
                let questionOptionalExp = prompt('Стаття необов\'язкових витрат?');
                appData.optionalExpenses[i] = questionOptionalExp;
                console.log(appData);
            }
        }
    },
    chooseIncome: function () {
        // for(let i = 0; i)
        let items = prompt('Що принесе додатковий дохід? (Перерахуйте через кому)', '')
        appData.income = items.split(', ');
        appData.income.push(prompt('Можливо, щось ще?'));
        appData.income.sort();
        if ((typeof (items)) === 'string' && (typeof (items)) != null && (typeof (items)) && (typeof (items)) != '') {
            console.log('passed');
        } else {
            console.log('failed');
        }

        appData.income.forEach(function (item, i) {
            alert('Можливості додаткового заробітку: ' + (i + 1) + ': ' + item);
        });
    }
};

for (let key in appData) {
    console.log("Наша програма включає в себе:" + key)
}

appData.chooseExpenses();

appData.detectDayBudget();

appData.detectLevel();

appData.checkSavings();

appData.chooseOptExpenses();

appData.chooseIncome();