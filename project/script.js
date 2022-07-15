// let money = prompt('Ваш бюджет на месяц')
// let time = prompt('Введите дату в формате YYYY-MM-DD')
// const firstNameExpense = prompt('Введите первую обязательную статью расхода')
// const firstCost = prompt('Введите необходимую сумму на первый расход')
// const secondNameExpense = prompt('Введите вторую обязательную статью расхода')
// const secondCost = prompt('Введите необходимую сумму на второй расход')

// // const getExpenseName = () => {
// //     const name = prompt('Напишите название обязательного расхода')
// //     return name
// // } 

// // const getExpenseValue = () => {
// //     const price = prompt('Напишите, сколько она стоит')
// //     return price
// // }

// // const expenses = {
// //     expenseOneName: getExpenseName(),
// //     expenseOneValue: getExpenseValue(),
// //     expenseTwoName: getExpenseName(),
// //     expenseTwoValue: getExpenseValue(),
// // }






// alert('Ваш дневной бюджет составляет :' + (money/30))




let money = prompt('Ваш бюджет на месяц', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    saving: false
};

let a1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a2 = prompt('Во сколько это обойдется?', ''),
    a3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a4 = prompt('Во сколько это обойдется?', '');

appData.expenses.a1 = a2; // при обращении к объекту и дальнейшей навигации в нём, необходимо начинать запись с имени объекта и дальше через точку к имени одного из его значений
appData.expenses.a3 = a4;

alert(appData.budget / 30)

