// let a = 5, b = 10 , c = '5';
// const z = a
// console.log(a == c); // true - qiymatiga qarab solishtiradi
// console.log(a === c);
// console.log(b == z);
// console.log(c === z);
// console.log(c !== z);
// console.log(a > b);
// console.log(b < b);
// console.log(c <= b);
// console.log(c >= c);

// while
// let i = 1;
//
// while(i <= 10) {
//     console.log(i);
//     i++;
// }
//
// let n = 1234;
// let s = 0;
// while (n !== n) {
//     n = parseInt(n / 10);
//     s++;
// }

// console.log(s)

// const readLine = require("readline")
//
// const rl = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
//
//
//
// rl.question("n soni kiriting: ",(n) => {
//     n = parseInt(n);
//     let t = n;
//     let s = 0;
//     while(n !== 0){
//         n = parseInt( n / 10);
//         s++
//     }
//     console.log("%d u %d xonali ", t,s);
//     rl.close();
// })

//
// const readLine = require("readline");
//
//
// const rl = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
//
// rl.question("n soni kiriting: ",(n) => {
//     n = parseInt(n);
//     let t = n;
//     let s = 0;
//     while(n !== 0){
//         n = parseInt( n / 10);
//         s++
//     }
//     console.log("%d u %d xonali ", t,s);
//     rl.close();
// });
// --------------------------------------------------
//while
// x ta g'isht bor
// 1 ta arava uchun y ta
// g'isht sig'adi
// necha maratoba olib borilganda
// g'ishtlar tugaydi


//
// const readLine = require("readline");
//
// const rl = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
//
// rl.question("Jami g'ishtlar sonini kiriting: ", (x) => {
//     rl.question("1 ta aravaga sig'adigan g'isht sonini kiriting: ", (y) => {
//
//         x = parseInt(x);
//         y = parseInt(y);
//
//         let t = x;      // asl qiymatni saqlash
//         let count = 0;
//
//         while (x > 0) {
//             x = x - y;
//             count++;
//         }
//
//         console.log("%d ta g'isht %d marta qatnovda tugaydi", t, count);
//
//         rl.close();
//     });
// });
// -----------------------------------
// let x = 7;
// let arava: = 2;
// let sanoq = 0;
//
// while (x > 0) {
//     x -= arava
//     sanoq++;
// }
//
// console.log(sanoq);
//
// -----------------------------------
//DO WHILE

// let i =100;
//
// do{
//     console.log(i)
//     i++;
// }while( i <= 10);

// Kurs
// Functions
// function kvadrat(son) {
//     return son*son;
// }
//
// console.log(kvadrat(5));
//
// // Function Declaration
//
// console.log(kvadrat(5));
// console.log(kvadrat(5));
//
// function kvadrat(son) {
//     return son*son;
// }
// ozgaruvchini oldindan elon qilish bu function decloration hisoblanadi va u ozgaruvchini birinchi orinda olib tekshirib beradi codeni tez ishlashiga yordam beradi

// expressionn function
// console.log(kvadrat (10));
// const kvadrat  = function (son) {
//     return son * son;
//
// }
// console.log(kvadrat(10));
//
// arrow function
// 1. expression funksiyaga juda oxshash bolib faqatgina arrow => kalit soziga ega
// const qoshish = (son) => {
//     return son + son
// }
// console.log(qoshish(15))
//
// // 2. Agar funksiya tana qismi bir qatordan iborat bolsa return kalit sozini yozish kk emas
//  const kvadrat = son => son *son;
// console.log(kvadrat(15));
// 3. Agar funksiya hech qanday parametrga ega bolmaa
// const print = () => console.log ('Hello my friend');
// print();

// 4. ikki yoki unday kop parametrlarga ega bolgan funksiya parametrlar qavs ichida bolishi shart
// const volume = ( a,b,c) => a * b * c;
// consol.log kopaytirish(1,2,3))

// ---------------------------------------------------
// 1. declaretion  Funcsiya
// function narxni hisoblash Dec (narx) {
//     const soliq = narx * 0.12 // 12 foiz soliq
//     return narx + soliq
// }
// console.log('mahsulot summasi'(narx + soliq): ${narxHisoblashDec(150000)}som)
// 2 EXP funksiya
// const narxni hisoblash EXP = function (narx) {
//     const soliq = narx * 0.12
//     return narx + soliq;
// }
// consol.log( Mahsulot summasi (narx + soliq):$ {narxni hisoblash(200000)}som)
//
// 3 Arrov F
// const Narxni hisoblash ARR = narx => narx + ( narx * 0.12);
// console.log ('Mahsulot narxini hisoblash (Narx + soliq):$ {narxni hisoblash(200000)}som)')
// ---------------------------------------------------------------------------------------------------------

// 2 salom berish function
// 1 DEc function
// function 'salomBerish' (name) {
//     return 'Assalomu alaykum ' $(name)!;
// }
// console.log(salomBerishDEC('Mohinur'));
// 2 Expression function
// const salomBerishEXP = function (name) {
//     return 'Assalomu alaykum ' ${name}!;
// }
// console.log(salomBerishEXP('Munisa'));
//
// 3 Arrow funksiya
//  const salomBerishARR = function (name) => 'Assalomu alaykum '{}

// --------------------------------------------------------------------
// functuion yoshTopishDEC (t_yil) {
//     return 2026 - t_yil;
// }
// consol.log('Sizning yoshingiz: ${ yoshTopishDEC(1974)} da')
//  2 EXP F
//  const yoshTopishEXP = function(t_yil) {
//     return 2026 - t_yil;
//  }
//  console.log('Sizning yoshingiz: ${ yoshTopishDEC(1995)} da')
//
// 3 Arrow F
// const yoshTopish = t_yil => 2026 - t_yil;
// console.log('Sizning yoshingiz: ${ yoshTopishDEC(2020)} da')























