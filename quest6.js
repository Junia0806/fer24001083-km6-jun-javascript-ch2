// Menggunakan Metode Slice
const first = (array, n) => { // Arrow Function dengan parameter array dan n 
  if (array == null) { // Jika array bernilai null atau tidak terdefinisi
      return void 0; // Mengembalikan undefined
  } else if (n == null) { // Jika n bernilai null atau tidak terdefinisi
      return array[0]; // Mengembalikan elemen pertama dari array
  } else if (n < 0) { // Jika n kurang dari 0
      return []; // Mengembalikan array kosong
  } else { // Jika semua kondisi sebelumnya tidak terpenuhi
      return array.slice(0, n); // metode slice untuk mengambil sejumlah n elemen pertama dari array
  } //return berupa array baru (salinan), mendapatkan elemen array tanpa mengubah elemen array yang asli
};
console.log("Menggunakan metode slice");
console.log(first(3)); 
console.log(first([7, 9, 0, -2]));
console.log(first([7, 9, 0, -2], -3));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));

// Menggunakan Metode Splice
const firstSplice = (arrayS, nS) => { // Arrow function dengan parameter arrayS dan nS 
    if (arrayS == null) { // Jika array bernilai null 
      return void 0; // Mengembalikan undefined
    } else if (nS == null) { // Jika n bernilai null 
      return arrayS[0]; // Mengembalikan elemen pertama dari array
    } else if (nS < 0) { // Jika n kurang dari 0
      return []; // Mengembalikan array kosong
    } else { // Jika kondisi sebelumnya tidak terpenuhi
      return arrayS.splice(0, nS); // metode splice untuk mengubah array aslinya
    } 
  };
  console.log("Menggunakan metode splice");
  console.log(firstSplice(3)); 
  console.log(firstSplice([7, 9, 0, -2]));
  console.log(firstSplice([7, 9, 0, -2], -3));
  console.log(firstSplice([], 3));
  console.log(firstSplice([7, 9, 0, -2], 3));
  console.log(firstSplice([7, 9, 0, -2], 6));
  
  
// Menggunakan Metode Filter
const firstFilter = (arrayF, nF) => { // arrow function dengan parameter arrayF dan nF 
    if (arrayF == null) { // Jika arrayF bernilai null 
        return void 0; // Mengembalikan undefined
    } else if (nF == null) { // Jika nF bernilai null 
        return arrayF[0]; // Mengembalikan elemen pertama dari arrayF
    } else if (nF < 0) { // Jika nF kurang dari 0
        return []; // Mengembalikan array kosong
    } else { // Jika kondisi sebelumnya tidak terpenuhi
        return arrayF.filter((_item, index) => index < nF); // metode filter() untuk mengambil elemen arrayF dengan indeks kurang dari nF
    }
  };
console.log("Menggunakan metode filter");
console.log(firstFilter(3));
console.log(firstFilter([7, 9, 0, -2]));
console.log(firstFilter([7, 9, 0, -2], -3));
console.log(firstFilter([], 3));
console.log(firstFilter([7, 9, 0, -2], 3)); // indeks [0, 1, 2, 3, 4] < 3 maka mengembalikan array berindeks [0, 1, 2]
console.log(firstFilter([7, 9, 0, -2], 6));

// Menggunakan Library Lodash metode take
const _ = require('lodash'); // Import library lodash
const firstL = (arrayL, nL) => { // arrow function dengan parameter arrayL dan nL 
  if (arrayL == null) { // Jika arrayL bernilai null 
      return void 0; // Mengembalikan undefined
  } else if (nL == null) { // Jika nL bernilai null 
      return arrayL[0]; // Mengembalikan elemen pertama dari arrayL
  } else if (nL < 0) { // Jika nL kurang dari 0
      return []; // Mengembalikan array kosong
  } else { // Jika semua kondisi sebelumnya tidak terpenuhi
      return _.take(arrayL, nL); // metode _.take dari lodash untuk mengambil sejumlah nL elemen pertama dari arrayL
  }
};

console.log("Menggunakan library lodash metode _.take");
console.log(firstL(3)); 
console.log(firstL([7, 9, 0, -2]));
console.log(firstL([7, 9, 0, -2], -3));
console.log(firstL([], 3));
console.log(firstL([7, 9, 0, -2], 3));
console.log(firstL([7, 9, 0, -2], 6));


