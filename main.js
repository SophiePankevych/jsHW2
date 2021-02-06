// --створити масив з:
// - з 5 числових значень
// let arr = [0, 1, 2, 3, 4];
// - з 5 стічкових значень
// let txt = ['q', 'w', 'e', 'r', 't'];
// - з 5 значень стрічкового, числового та булевого типу
// let sth = [3, true, 't', 4524, false];
// - та вивести його в консоль
// console.log(arr);
// console.log(txt);
// console.log(sth);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль
    // let arr = [];
    // arr[0] = 432;
    // arr[1] = 'true';
    // arr[2] = true;
    // arr[3] = 1;
    // console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<div>Hello</div>')
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Hello ${[i]} </div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
//     document.write('<h1>Hello</h1>');
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Hello ${[i]}</h1>`);
//     i++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = [0, 11, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = [1, true, 'tre', 543, 'sdvcd', 4342343243, false, 43, 'fdsf', 10];
// for (const arrElement of arr) {
//     console.log(arrElement);
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
// let arr = [1, true, 'tre', 543, 'sdvcd', 4342343243, false, 43, 'fdsf', 10];
// for (const arrElement of arr) {
//     if (typeof arrElement === "boolean") {
//         console.log(arrElement);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
// let arr = [1, true, 'tre', 543, 'sdvcd', 4342343243, false, 43, 'fdsf', 10];
// for (const arrElement of arr) {
//     if (typeof arrElement === "number") {
//         console.log(arrElement);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
// let arr = [1, true, 'tre', 543, 'sdvcd', 4342343243, false, 43, 'fdsf', 10];
// for (const arrElement of arr) {
//     if (typeof arrElement === "string") {
//         console.log(arrElement);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = 432;
// arr[1] = 'fsdf';
// arr[2] = true;
// arr[3] = false;
// arr[4] = 'ffkfkfkkfk';
// arr[5] = 432343;
// arr[6] = 3432423;
// arr[7] = true;
// arr[8] = 'gtgtgtgbr';
// arr[9] = 0;
// for (const arrElement of arr) {
//     console.log(arrElement);
// }

// - Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i)
// }

// - Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(i);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(i)
//     document.write('<br>')
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i < 100; i+=2) {
//     console.log(i);
//     document.write(i);
//     document.write('<br>')
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// let min = 0;
// let sec = 0;
// for (let min = 0; min < 2; min++) {
//     for (let sec = 0; sec < 60; sec++) {
//         console.log(`${min} : ${sec}`);
//     }
// }

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилин (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// let hours = 0;
// let min = 0;
// let sec = 0;
// for (let hours = 0; hours < 2; hours++) {
//     for (let min = 0; min < 60; min++) {
//         for (let sec = 0; sec < 60; sec++) {
//             console.log(`${hours} : ${min} : ${sec}`)
//             if (hours === 1 && min === 20 && sec ===0){
//                 min=60;
//                 break;
//             }
//         }
//     }
// }