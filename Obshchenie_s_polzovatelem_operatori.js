// alert('Good morning, my mind)'); // вызывает модальное окно с сообщением. Пока оно открыто, все скрипты на странице заморожены

// let answer = confirm('Are you here');
// console.log(answer) // При запуске , вылезает модальное окно, с двумя вариантами ответа, да или отмена. Если нажать Да,
// // то будет true , если отмена , то false.


// let answer = prompt ('18 est?', '')
// console.log(typeof(answer))

// Если ответить нет, а точнее отмена, то консоь выведет null , а его тип будет object , но это признаная ошибка в js

// В любом случае прием данных происходит в типе строки




// ОПЕРАТОРЫ В JS УРОК 4 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Существуют инкременты и декрименты . Инкрименты увеличивают значение на 1, а декрименты наоборот, уменьшают

// console.log('oooo' + 'jjjas'); // он сложит все в строку, так как по умолчанию принимается только string
// console.log(5 + + 'jjjas'); // попытается привести сроку к числу , но так как не привести, то получим результат Nan

// let answer = +prompt ('18 est?', '') // унарный плюс перед prompt заставляем принимать данные типа number
// console.log(typeof(answer))

// let incr = 10, // переменные можно объявлять в таком виде, перечисляя через запятую.
//     decr = 10; // но обязательно после перечисления переменных , ставьте точку с запятой, иначе получите ошибку

// incr++;
// decr--;

// console.log(++incr);
// console.log(--decr); // префиксная форма возвращает уже измененное значение

// console.log(incr++);
// console.log(decr--); // постфиксная возвращает еще не измененное значение, только после того, как она ее вернула, она его изменяет


// console.log(5%2); // оператор % возвращает остаток от деления, в данном случае остатком от деления 5 на 2 , будет 1 

// Также есть разные варианты использования знаков = . Например : = это присваивание , == это проверка на равенство, а === это строгая проверка по типам данных

// console.log('2' == 2); // Выдаст true, так как == сравнивает по значениям
// console.log('2' === 2); // Выдаст false , так как идет сравнение по типам данных


// Оператор И(&&) ИЛИ (||), отрицания (!)

let isChecked = true,
    isClose = true;

console.log(isChecked && isClose); // оператор И (&&) возвращает true, если все аргументы являются правдивыми
// Если хоть один будет false, то выдаст false

console.log(isChecked || isClose); // оператор или (||) возвращает true, если хоть один из аргуметов будет true. False мы
//можем получить, если все аргументы будут равны false .

console.log(!isChecked || !isClose); // Выдаст false , так как оператор отрицания заствляет булевое значение 
//принять обратное значение и то, что было true стало false.


//Несколько слов про 'use strict' 
// он заставляет избавляться от ошибокк в предыдущих версиях языка, например , если мы не объявляя переменную ,дав значение 
// например букве и вызовем ее в консоль, то будет is not defined , так как в этом стандарте нужно обязательно объявлять переменную






