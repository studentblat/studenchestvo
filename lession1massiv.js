
const number = 5;// сюда же входят infinity и NaN. Infinity получится ,если поделить число на 0. NaN ,если будет не число, а строка например
const string = 'Hello';
const sym = Symbol();
const boolean = true;
null; //  такое значение может выйти, когда такого параметра просто не существует
undefined; // такое занчение выйдет, если параметр существует,но у него нет значения
const obj = {}; // структура для хранения любых типов данных, будто бы иблиотека


let person = {
    name : 'John',
    age : 25,
    isMarried : false
}

console.log(person.name); /* обращение к параметру объекта прописывается так 
сначала пишем к какому объекту обращаемся , то есть к person , потом уже выписываем
один из параметров, то есть name . */

console.log(person['name']); // имеет такой же результат , что  и предыдущий лог


let arr = ['plum.png','orange.jpeg','apple.bmp']; //массив объявляется через [],также
// нумерация идет по номеру индекса ,который начинается с 0
console.log(arr[0]); // обращение к элементу массива, где 0 - это его индекс в массиве