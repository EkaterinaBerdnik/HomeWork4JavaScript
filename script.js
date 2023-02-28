// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
const array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array1.length; i++) {
    if (array1[i] === 0) {
        console.log('это ноль');
    } else if (array1[i] % 2 === 0) {
        console.log('четное число');
    } else {
        console.log('нечетное число');
    } 
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
const array2 = [1, 2, 3, 4, 5, 6, 7];
array2.splice(3, 2);
console.log(array2);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3
const array3 = [];
for (let i = 0; i <= 9; i++) {
    array3.push (Math.floor(Math.random(10)*10));
}
console.log(array3);

console.log(array3.reduce((a, b) => a + b));

let min = array3[0];
console.log(array3.filter(num => num < min));

console.log(array3.some((item) => item === 3)); //варинт 1
console.log(array3.filter(a => a === 3)); //вариант 2


// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

let string = "x";
console.log(string);
for (let i = 1; i < 20; i++) {
    console.log(string += "x");
}