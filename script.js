// if (1) {
//     console.log("верно")
// } else {
//     console.log('неверно')
// }


let num = 50

if (num < 49) {
    console.log('неверно')
} else if (num > 100) {
    console.log('много')
} else {
    console.log('навена')
};



(num == 50) ? console.log('ok') : console.log('no');


switch (num) {
    case num < 49:
        console.log('неверно');
        break;
    case num > 100:
        console.log('много');
        break;
    case num > 80:
        console.log('много ppc');
        break;
    case 50: //num == 50: Данная запись не будет верна , здесь при сравнении нужно писать именно значение
    console.log('навена');
    break;
    default: 
        console.log('something wrong');
        break;// Эта директива нужна, чтобы всё подряд не выполнялось и останавливалось при достижении цели или наоборот
}