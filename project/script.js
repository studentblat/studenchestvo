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



// appData.expenses.a1 = a2; // при обращении к объекту и дальнейшей навигации в нём, необходимо начинать запись с имени объекта и дальше через точку к имени одного из его значений
// appData.expenses.a3 = a4; // Каким образом работает данная конструкция слияния , а точнее присвания?

for (let i = 0; i < 2 ; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько это обойдется?', '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50){
        appData.expenses[a] = b; // здесь мы задаем свойству expenses значение переменной а , которая должна получить ответ от переменной b
         } //а с помощью цикла мы вызываем данные вопросы два раза
        //  else ()
         } 

// let i = 0;
// while(i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько это обойдется?', '');

//         if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50){
//             appData.expenses[a] = b; // здесь мы задаем свойству expenses значение переменной а , которая должна получить ответ от переменной b
//              } 
//     i++

// }   

// let i = 0;
// do{
//     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько это обойдется?', '');

//         if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50){
//             appData.expenses[a] = b; 
//     i++}
//     } while(i<2) // Этот цикл заставляет вписать значения, так как он работает, пока значения не будут вписаны

appData.moneyPerDay = appData.budget / 30;

alert ('Ваш дневной бюджет составляет :' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Ебать ты бичара')
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log('Не плохо, братик')
} else if (appData.moneyPerDay >= 2000) {
    console.log('хуя ты ферзь')
} else {
    console.log ('Неизвестная ошибка')
}


