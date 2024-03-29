//CARA PERTAMA
const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const getInfoPenjualan = (dataPenjualan) => {
  // Jika parameter kosong (undefined) maka kondisi ini akan dijalankan.
  if (dataPenjualan === undefined) {
    return "error: Parameter tidak boleh kosong bro. Coba isi parameternya!";
    // Jika parameter bukan sebuah array maka kondisi ini akan dijalankan
  } else if (!Array.isArray(dataPenjualan)) {
    return "error: Parameter yang diisi harus Array, bro!";
  } else {
    // TOTAL KEUNTUNGAN
    // mencari total keuntungan menggunakan metode reduce yang dihasilkan dari metode map sebelumnya
    const totalKeuntungan = dataPenjualan
      .map((value) => (value.hargaJual - value.hargaBeli) * value.totalTerjual) //ambil value dan hitung
      .reduce((a, b) => a + b, 0); //menjumlahkan total keuntungan, 0->nilai awal total keuntungan
    // Menggunakan metode toLocaleString() untuk memformat 'totalKeuntungan' menjadi Rupiah.
    const formatTotalKeuntungan = totalKeuntungan.toLocaleString("id-ID", {
      style: "currency", // menentukan format angka yang akan dihasilkan.
      currency:"IDR", // kode mata uang Indonesia.
      minimumFractionDigits: 0, // menentukan jumlah digit desimal minimimum, dan di set ke 0.
    });

    // TOTAL MODAL
    // mencari total modal menggunakan metode reduce yang dihasilkan dari metode map sebelumnya
    const totalModal = dataPenjualan
      .map((value) => (value.totalTerjual + value.sisaStok) * value.hargaBeli) //hasilnya array baru berisi total modal u/ setiap item penjualan.
      .reduce((a, b) => a + b, 0); //menjumlahkan semua total modal tersebut menjadi satu nilai total
    // Menggunakan metode toLocaleString() untuk memformat 'totalKeuntungan' menjadi Rupiah.
    const formatTotalModal = totalModal.toLocaleString("id-ID", {
      style: "currency", // menentukan format angka yang akan dihasilkan.
      currency: "IDR", // kode mata uang Indonesia.
      minimumFractionDigits: 0, // menentukan jumlah digit desimal minimimum, dan di set ke 0.
    });

    // PERSENTASE KEUNTUNGAN
    const persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;
    // Memformat persentase keuntungan menggunakan metode toFixed()
    const formatPersentaseKeuntungan = persentaseKeuntungan.toFixed(2) + "%"; //menjadikan desimal 2 angka di belakang koma

    // PRODUK BUKU TERLARIS
    // mendapatkan produk buku terlaris dengan mengurutkan dari 'totalTerjual' terbanyak,
    // kemudian mengambil index[0] yang mana berisi 'totalTerjual' tertinggi,
    // setelah itu mengakses 'namaProduk' pada index[0]
    const produkBukuTerlaris = dataPenjualan.sort(
      (a, b) => b.totalTerjual - a.totalTerjual
    )[0].namaProduk;

    /// PENULIS TERLARIS
    // membuat variabel 'penulisTerlaris' untuk menampung nama penulis terlaris.
    // membuat variabel 'totalTerjualTertinggi' untuk menampung total terjual tertinggi penulis.
    let penulisTerlaris = "";
    let totalTerjualTertinggi = 0;

    // membuat variabel 'dataPenulisTerlaris' dan menggunakan metode reduce() untuk menjumlahkan total penjualan buku penulis.
    const dataPenulisTerlaris = dataPenjualan.reduce((a, b) => {
      // membandingkan total terjual dari setiap buku dengan total terjual tertinggi.
      // Jika total terjual dari buku saat ini lebih tinggi dari total terjual tertinggi, maka buku saat ini akan menjadi buku terlaris.
      if (b.totalTerjual > totalTerjualTertinggi) {
        totalTerjualTertinggi = b.totalTerjual;
        penulisTerlaris = b.penulis;
      }
      return penulisTerlaris;
    });

    return {
      totalKeuntungan: formatTotalKeuntungan,
      totalModal: formatTotalModal,
      presentaseKeuntungan: formatPersentaseKeuntungan,
      produkBukuTerlaris: produkBukuTerlaris,
      penulisTerlaris: dataPenulisTerlaris,
    };
  }
};

console.log(getInfoPenjualan(dataPenjualanNovel));
