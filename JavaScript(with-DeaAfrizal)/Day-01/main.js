// alert('hey') (muncul di pop up)

// console.log('hamas') (untuk debug/ cek ouput dari fungsi yang kita buat)

// prompt('masukan umur anda') (muncul pop up  dan di minta  isi colom input pop up ini)

// var usia = 30 

// console.log('heyhoo usia kamu adalah ' + usia )

// let usia = prompt('berapa usia kamu?')
// alert('usia kamu adalah' + usia)
// let name = 'hamas ikhlas' // tipe string
// let old = 24 // tiipe interger/ int/number
// let tinggiBadan = 169.5 // tipe double float
// let beratBadan 
// let pacar = 2 
// beratBadan = 55

// alert('Your name is ' + name + ' your old is ' + old)

// if(pacar == null){
//     pacar = 'belum punya'
// }else {
//     pacar = 'sudah punya'
// }

// switch(pacar){
//     case 1 :
//         pacar = 'punya 1 aja'
//         break
//     case 2 :
//         pacar = 'punya 2 pacar, saja cukup playBoy'
//         break
//     default : 
//     pacar = 'saya tidak punya'
//         break
// }

// let saldoAwal = 50000
// let SaldoTambahan = 30000
// let TotalSaldo  = saldoAwal + SaldoTambahan
// const x = 2
// const y = 5
// const z = 2 * 5

// alert(`nilai X = ${x}  * nilai Y = ${y} sama dengan ${z}`)
// alert(`Your name ${name} and your old ${old} tinggi banda ${tinggiBadan} dan berat badan ${beratBadan} pacar ${pacar}`)
// alert(`saldo awal saya adalah ${saldoAwal} dan saldo tambahan sayang adalah ${SaldoTambahan} jadi total saldo saya adalah ${TotalSaldo} `)

// let namaGuru = ['jodi','bunga','rahma'] // tipe array
// namaGuru.push('hamas','putri')
// namaGuru.shift() //menghapus index pertama atau index 0
// namaGuru.pop() // menghapus index terakhir 
// alert(namaGuru)

//Belajar loop
// for(let i = 1; i <= 10;  i ++){
//     console.log('hamas','putri')
// }

// const namaGuru = ['hamas','putri','bunga','retno']

// for(let x = 0; x < namaGuru.length; x++){
//     console.log(namaGuru[x])
// }

// let i = 0
// while(i < 10) {
//     i++
//     console.log('hamas')
// }

// do {
//     i++
//     console.log('hamas')
// }while(i < 10)

//Tugas Kecil 

/*
1.prompt untuk mengetahui saldo akhir dari apa yang diinput oleh user
2.menentukan hari dari tanggal yang ada saat ini di pc kalian 
**/

//Jawab

// let saldoAwal = Number(prompt('Masukan saldo awal'))
// let saldoTambahan = Number(prompt('Masukan saldo tambahan'))
// let saldoAkhir = saldoAwal + saldoTambahan

// alert(`saldo awal adalah Rp.${saldoAwal} dan saldo tambahan Rp.${saldoTambahan} jadi Total saldo akhir anda adalah Rp.${saldoAkhir}`)

// let hari = new Date()
// console.log(hari)
// let namaHari = ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu']
// alert(`hari ini adalah ${hari}`)

const hari = new Date();
const namaHari = hari.toLocaleDateString('id-ID', { weekday: 'long' });

console.log(hari);
alert(`Hari ini adalah ${namaHari}`);