let money = prompt('Ваш бюджет на месяц')
let time = prompt('Введите дату в формате YYYY-MM-DD')
const firstNameExpense = prompt('Введите первую обязательную статью расхода')
const firstCost = prompt('Введите необходимую сумму на первый расход')
const secondNameExpense = prompt('Введите вторую обязательную статью расхода')
const secondCost = prompt('Введите необходимую сумму на второй расход')

// const getExpenseName = () => {
//     const name = prompt('Напишите название обязательного расхода')
//     return name
// } 

// const getExpenseValue = () => {
//     const price = prompt('Напишите, сколько она стоит')
//     return price
// }

// const expenses = {
//     expenseOneName: getExpenseName(),
//     expenseOneValue: getExpenseValue(),
//     expenseTwoName: getExpenseName(),
//     expenseTwoValue: getExpenseValue(),
// }




let appData = {
    budget: money,
    timeData: time,
    expenses,
    optionalExpenses:{},
    income: [],
    saving: false,
}

alert('Ваш дневной бюджет составляет :' + (money/30))
