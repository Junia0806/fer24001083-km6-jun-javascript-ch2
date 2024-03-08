// Arrow function untuk mendapatkan angka terbesar kedua dari sebuah array
const getAngkaTerbesarKedua = (dataNumbers) => {
  // Memeriksa apakah parameter tidak didefinisikan (undefined)
  if (dataNumbers === undefined) {
    return "error: Parameter tidak boleh kosong bro. Coba isi parameternya!";
  } else if (Array.isArray(dataNumbers)) { // Jika parameter adalah sebuah array
    // Mengurutkan array secara ascending, kemudian mengubahnya menjadi Set untuk menghilangkan duplikat
    // Reverse agar angka terbesar berada di awal set
   let arraySorted = new Set(
      dataNumbers
        .sort((a, b) => {
          return a - b;
        })
        .reverse()
    );
    // Mengambil angka terbesar kedua dari setelah di-reverse dengan indeks array 1
    return Array.from(arraySorted)[1];
  } else { // Jika parameter bukan sebuah array
    return "error: Parameter yang diisi harus Array, bro!";
  }
}

const dataAngka = [2, 3, 5, 6, 6, 4, 7, 10, 86];
console.log(getAngkaTerbesarKedua(dataAngka)); // Output: 10

console.log(getAngkaTerbesarKedua(0)); // Output: error: Parameter yang diisi harus Array, bro!
console.log(getAngkaTerbesarKedua()); // Output: error: Parameter tidak boleh kosong bro. Coba isi parameternya!
