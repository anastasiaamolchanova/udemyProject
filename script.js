'use strict';

let moneyData = prompt("Ващ бюджет на месяц?");
let timeData = prompt("Введите дату YYYY-MM-DD");



let appData = {
    budget: moneyData,
    timeData: timeData,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,


};



for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце");
    let b = prompt("Во сколько обойдется? ?");

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' & a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
        appData.budget -= b;
    } else {
        break;
    }
}

let moneyPerDay = alert(appData.budget / 30);