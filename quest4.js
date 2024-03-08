const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High ",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

// Arrow Function getTotalPenjualan dengan parameter (dataPenjualan)
const getTotalPenjualan = (dataPenjualan) => {
  // Jika parameter kosong (undefined) maka kondisi ini akan dijalankan.
  if (dataPenjualan === undefined) {
    return "error: Parameter tidak boleh kosong bro. Coba isi parameternya!";
    // Jika parameter bukan sebuah array maka kondisi ini akan dijalankan
  } else if (!Array.isArray(dataPenjualan)) {
    return "error: Parameter yang diisi harus Array, bro!";
  } else {
    //Array baru berisi nilai dari properti totalTerjual dari setiap objek dalam array dataPenjualan
    let totalTerjual = dataPenjualan.map((values) => values.totalTerjual);

    //Berisi hasil penjumlahan seluruh elemen array totalTerjual menggunakan metode reduce().
    let hasil = totalTerjual.reduce((a, b) => a + b, 0);

    return hasil;
  }
};

console.log("Total seluruh sepatu yang terjual adalah ", getTotalPenjualan(dataPenjualanPakAldi));
console.log(getTotalPenjualan("sepatu"));
console.log(getTotalPenjualan(12));
console.log(getTotalPenjualan(false));
console.log(getTotalPenjualan());
