// 1, feladat
// konstans, kötelező kezdeti értéket adni neki és nem kaphat új értéket
// const PI = 3.14;
// nem kötelező kezdeti értéket adni neki és kaphat új értéket
// let a = 1;

// String: karakterlánc
// let str = 'vizsga';

// szám
// let a = 1;

// boolen logikai változó
// let boolean = "true"

// Összetett adattípusok:
// tömb, ami lehet egy, illetve többdimenziós

// let arr = [1, 2, 3];

// objektum:

// const objektum = {
//  1: exam,
//  2: false,
// 3: name,
// 4: valtozo
// };

// 2-es feladat: Referencia szerinti paraéterátadásnál megváltozik az eredeti változó, érték szerintinél nem.
// referenica szerinti értékádadás pl. a tömböknél, érték szerinti értékádadás pl.: a stringnél van.

// 3. feladat: eldöntés tétele
let arr = [2, 3, 4, 4, 2, 10, 11, 22, 33, 44, 1000, -1, -2];
let arr1 = [1, 1, 10, 11, 22, 33, 44, 1000, -1];

const tartalmaze = (element, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
  return false;
};

console.log('Tartalmazza-e a 4-est:', tartalmaze(4, arr));

// 4, feladat Maximum keresés

const max = (arr) => {
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log('A tömb maximuma:', max(arr));

// 5. feladat, 2, vel osztható, pozitív, kétjegyű számok

const number = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > 9 && arr[i] < 100) {
      console.log(arr[i]);
    }
  }
};
number(arr);

// 6. feladat metszet

const metszetfgv = (arr, arr1) => {
  let metszet = [];
  let a = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[i] === arr1[j]) {
        metszet[a] = arr1[i];
        a++;
        break;
      }
    }
  }
  return metszet;
};

console.log(metszetfgv(arr, arr1) + ' ,a közös elemek');

// 7. feladat

const add = (a, b) => {
  return a + b;
};

const mult = (a, b) => {
  return a * b;
};

const hatvany = (a, b) => {
  return a ** b;
};

console.log('Az összeg: ' + add(1, 2));
console.log('A szorzat: ' + mult(1, 2));
console.log('A hatványozás eredménye: ' + hatvany(5, 0));

module.exports = {
  add, mult, hatvany
};

// 8. feladat

// let readline = require('readline-sync');
// let n = readline.question('Add meg az első számot!');
// let m = readline.question('Add meg  második számot!');

const generate2d = (n, m) => {
  let arr = new Array(n);
  let j = 0;
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
    arr[i] = i * j;
    j++;
  }
  return arr;
};

console.log(generate2d(5, 5));
