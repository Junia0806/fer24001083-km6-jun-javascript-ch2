// Menggunakan Metode Slice
const first = (array, n) => {
  if (array == undefined) {
    //Jika array tidak didefinisikan
    return undefined;
  } else if (array.length == 0) {
    //Jika jumlah element array = 0 (array kosong)
    return "Array nya kosong nih bro!";
  } else if (n == null) {
    // Jika n bernilai null atau tidak terdefinisi
    return array[0]; // Mengembalikan elemen pertama dari array (array berindeks 0)
  } else if (n <= 0) {
    // Jika n kurang dari sama dengan 0
    return []; // Mengembalikan array kosong
  } else {
    return array.slice(0, n); // metode slice untuk mengambil sejumlah n elemen pertama dari array
  } //return mengambil potongan dan mengembalikan array baru, tanpa mengubah array yang asli
};
console.log("METODE SLICE");
console.log("Kondisi array tidak terdefinisikan =", first(3));
console.log("Kondisi array kosong = ", first([], 3));
console.log("Kondisi n tidak terdefinsikan = ", first([7, 9, 0, -2]));
console.log("Kondisi n kurang dari 0 = ", first([7, 9, 0, -2], -3));
console.log("Kondisi n sama dengan 0 = ", first([7, 9, 0, -2], 0));
console.log("Kondisi normal = ", first([7, 9, 0, -2], 3));
console.log("===================================================");

// Menggunakan Metode Splice
const firstSplice = (arrayS, nS) => {
  if (arrayS == undefined) {
    return undefined;
  } else if (arrayS.length == 0) {
    return "Array nya kosong nih bro!";
  } else if (nS == null) {
    return arrayS[0];
  } else if (nS <= 0) {
    return [];
  } else {
    return arrayS.splice(0, nS); //menghapus elemen arrayS sesuai dengan nS elemen pertama
  } //return mengembalikan array berisi elemen yang dihapus
};
console.log("METODE SPLICE");
console.log("Kondisi array tidak terdefinisikan =", firstSplice(3));
console.log("Kondisi array kosong = ", firstSplice([], 3));
console.log("Kondisi n tidak terdefinsikan = ", firstSplice([7, 9, 0, -2]));
console.log("Kondisi n kurang dari 0 = ", firstSplice([7, 9, 0, -2], -3));
console.log("Kondisi n sama dengan 0 = ", firstSplice([7, 9, 0, -2], 0));
console.log("Kondisi normal = ", firstSplice([7, 9, 0, -2], 3));
console.log("===================================================");

// // Menggunakan Metode Filter
const firstFilter = (arrayF, nF) => {
  if (arrayF == undefined) {
    return undefined;
  } else if (arrayF.length == 0) {
    return "Array nya kosong nih bro!";
  } else if (nF == null) {
    return arrayF[0];
  } else if (nF <= 0) {
    return [];
  } else {
    return arrayF.filter((_item, index) => index < nF);
    // metode filter() untuk mengambil elemen arrayF dengan indeks kurang dari nF
    // item (elemen array saat ini) - index (indeks elemen array saat ini).
    // index < nF untuk memeriksa apakah indeks elemen saat ini kurang dari nF.
    // return mencari kemudian mengembalikan array baru
  }
};
console.log("METODE FILTER");
console.log("Kondisi array tidak terdefinisikan =", firstFilter(3));
console.log("Kondisi array kosong = ", firstFilter([], 3));
console.log("Kondisi n tidak terdefinsikan = ", firstFilter([7, 9, 0, -2]));
console.log("Kondisi n kurang dari 0 = ", firstFilter([7, 9, 0, -2], -3));
console.log("Kondisi n sama dengan 0 = ", firstFilter([7, 9, 0, -2], 0));
console.log("Kondisi normal = ", firstFilter([7, 9, 0, -2], 3)); // i [0, 1, 2, 3, 4] < 3 maka dikembalikan i [0, 1, 2]
console.log("===================================================");

// Menggunakan Library Lodash metode take
const _ = require("lodash"); // Import library lodash
const firstL = (arrayL, nL) => {
  if (arrayL == undefined) {
    return undefined;
  } else if (arrayL.length == 0) {
    return "Array nya kosong nih bro!";
  } else if (nL == null) {
    return arrayL[0];
  } else if (nL <= 0) {
    return [];
  } else {
    return _.take(arrayL, nL); // metode _.take dari lodash untuk mengambil sejumlah nL elemen pertama dari arrayL
    //take untuk mengambil sejumlah elemen pertama dari array
    // menerima 2 parameter array dan jumlah elemen yang ingin di ambil
    // return berupa array baru yang berisi element dari array lama (yang diambil)
  }
};

console.log("METODE TAKE LIBRARY LODASH");
console.log("Kondisi array tidak terdefinisikan =", firstL(3));
console.log("Kondisi array kosong = ", firstL([], 3));
console.log("Kondisi n tidak terdefinsikan = ", firstL([7, 9, 0, -2]));
console.log("Kondisi n kurang dari 0 = ", firstL([7, 9, 0, -2], -3));
console.log("Kondisi n sama dengan 0 = ", firstL([7, 9, 0, -2], 0));
console.log("Kondisi normal = ", firstL([7, 9, 0, -2], 3));
