const formRegistrasi = document.getElementById('form-registrasi');
const inputNamaDepan = document.getElementById('nama-depan');
const inputNamaBelakang = document.getElementById('nama-belakang');
const inputNilaiAngka = document.getElementById('nilai-angka');

function konversiNilaiKeHuruf(nilai) {
    if (nilai >= 85 && nilai <= 100) {
        return 'A';
    } else if (nilai >= 80 && nilai < 85) {
        return 'A-';
    } else if (nilai >= 75 && nilai < 80) {
        return 'B+';
    } else if (nilai >= 70 && nilai < 75) {
        return 'B';
    } else if (nilai >= 65 && nilai < 70) {
        return 'B-';
    } else if (nilai >= 60 && nilai < 65) {
        return 'C+';
    } else if (nilai >= 55 && nilai < 60) {
        return 'C';
    } else if (nilai >= 40 && nilai < 55) {
        return 'D';
    } else if (nilai >= 0 && nilai < 40) {
        return 'E';
    } else {
        return 'Nilai tidak valid';
    }
}

formRegistrasi.addEventListener('submit', function(event) {
    event.preventDefault();

    const namaDepan = inputNamaDepan.value;
    const namaBelakang = inputNamaBelakang.value
    const nilaiAngka = parseFloat(inputNilaiAngka.value); 
    const namaLengkap = `${namaDepan} ${namaBelakang}`;
    const nilaiHuruf = konversiNilaiKeHuruf(nilaiAngka);

    console.log(`Nama Lengkap : ${namaLengkap}`);
    console.log(`Nilai Angka  : ${nilaiAngka}`);
    console.log(`Nilai Huruf  : ${nilaiHuruf}`);
});