// Arrow Function CheckTypeNumber dengan parameter (givenNumber)
const checkTypeNumber = (givenNumber) => {
  // jika parameter kosong (undefined) maka kondisi ini akan dijalankan.
  if (givenNumber === undefined) {
    return "error: Bro whwere is the parameter? Please input the parameter";
    //Jika type data bukan number maka kondisi ini akan dijalankan.
  } else if (typeof givenNumber !== "number") {
    return "error: Invalid data type";
    //Jika ke 2 kondisi diatas tidak memenuhi maka perintah ini akan dijalankan
    //Perintah akan memodulo angka yang dimasukkan, bila sisanya 0 maka dicetak Genap, jika tidak maka Ganjil
  } else {
    let angka = givenNumber % 2 === 0 ? "GENAP" : "GANJIL";
    return angka;
  }
};

console.log(checkTypeNumber(10)); // genap
console.log(checkTypeNumber(3)); // ganjil
console.log(checkTypeNumber(15)); // ganjil
console.log(checkTypeNumber("2")); //error: Invalid data type
console.log(checkTypeNumber({})); //error: Invalid data type
console.log(checkTypeNumber(false)); //error: Invalid data type
console.log(checkTypeNumber([])); //error: Invalid data type
console.log(checkTypeNumber()); //error: Bro whwere is the parameter? Please input the parameter
