//1 polindrom

// let str = "mada";
// const isPalindrom = (text) => {
//   let n = text.length;
//   for (let i = 0; i < n / 2; i++) {
//     if (text[i] === text[n - 1 - i]) {
//       return "Text is palindrom";
//     }
//     return "Text is not palindrom";
//   }
// };

// console.log(isPalindrom(str));

//2
// let people = [
//   {
//     firstname: "Aram",
//     lastname: "Sargsyan",
//     age: 25,
//   },
//   {
//     firstname: "Armen",
//     lastname: "Gasparyan",
//     age: 30,
//   },
// ];

// const newArr = (peop, newAge) => {
//   let somePeople = peop.filter((item) => item.age <= newAge);
//   return somePeople;
// };
// console.log(newArr(people, 12));

// without filter
let people = [
  {
    firstname: "Aram",
    lastname: "Sargsyan",
    age: 25,
  },
  {
    firstname: "Armen",
    lastname: "Gasparyan",
    age: 30,
  },
];

const newArr = (peop, newAge) => {
  let empArr = [];

  for (let key of peop) {
    if (key.age <= newAge) {
      empArr.push(key);
    }
  }
  return empArr;
  //return "No result";
};
console.log(newArr(people, 27));

//3
// function val(c) {
//   if (c >= "0".charCodeAt() && c <= "9".charCodeAt())
//     return c - "0".charCodeAt();
//   else return c - "A".charCodeAt() + 10;
// }

// function toDecimal(str, base) {
//   let power = 1;
//   let num = 0;

//   for (let i = str.length - 1; i >= 0; i--) {
//     if (val(str[i].charCodeAt()) >= base) {
//       console.log("Invalid Number");
//       return -1;
//     }

//     num += val(str[i].charCodeAt()) * power;
//     power = power * base;
//   }
//   return num;
// }

// let str = "256";
// let base = 16;
// console.log(toDecimal(str, base));
