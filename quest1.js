//Arrow Function Ubah Kata
const changeWord = (selectedText, changedText, text) => {
  // cek apakah 'selectedText' terdapat didalam 'text'
  // jika tidak ditemukan, maka kondisi ini akan terpenuhi dan mencetak pesan pada return
  if (!text.includes(selectedText)) {
    return `Kata '${selectedText}' tidak ditemukan, coba periksa lagi!`;
  } else {
    // 'newText' untuk menyimpan isi kalimat baru
    // text.split --> membagi menjadi array substring dengan menggunakan selectedText sebagai pemisah
    //.join() --> menggabungkan kembali array tersebut menjadi string dengan menggunakan changedText sebagai pengganti setiap kemunculan dari selectedText.
    const newText = text.split(selectedText).join(changedText);
    return newText;
  }
};

//inisiasi value dari variabelnya
const kalimat1 = "Langit selalu merindukan lautnya, selalu saja seperti itu.";
const kalimatBaru = changeWord("selalwu", "jarang", kalimat1);

const kalimat2 = "Langit hari ini cerah, secerah masa depanku";
const kalimatBaru2 = changeWord("cerah", "berawan", kalimat2);

//mencetak atau output running
console.log("Kalimat1 awalnya itu : ", kalimat1);
console.log("Kalimat1 barunya adalah :", kalimatBaru);
console.log("==================== PEMBATAS =======================");
console.log("Kalimat2 awalnya itu : ", kalimat2);
console.log("Kalimat2 barunya adalah :", kalimatBaru2);
