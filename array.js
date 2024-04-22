// let arraySaya = new Array("Mobil", "Pesawat", "Motor", "Becak", "Truk", "Bus");

// // const message = `
// //   panjang array yang berisi [${arraySaya.join(', ')}], berjumlah ${arraySaya.length} elemen, dan array terakhir berisi elemen ${arraySaya[arraySaya.length - 1]}
// // `
// arraySaya.splice(1,2);

// console.log(arraySaya)

// const month = ["Januari","Februari", "April", "Mei", "Juni", "Juli"];

// month.splice(2, 0, "Maret");
// console.log(month)

// const programmer = ["Sandhika", "Eko", "Dea", "Kyra", "Vip Stu"];
// const channel = ["WPU", "Lazada", "Cuyys", "Frontend", "React"];

// const joinAllArrays = [...programmer, ...channel];
// console.log(joinAllArrays);

// const objeksatu = { namaKamu : "Rizky Al Farid Hafizh", kelasKamu : "IF1"};

// const objekdua = { kendaraan : "Nmax", fuel : 100};

// const objekbaru = {...objeksatu, ...objekdua};

// console.log(objekbaru);

const kendaraan = {
  merk : "Honda-112",
  gear : "Manual",
  wheels : 4,
  color : "Silver"
};

const { merk:merkmobil, gear:gearmobil, wheels:banmobil, color:warnamobil, type:tipe = "pcx-1231" } = kendaraan;

console.log(merkmobil);
console.log(gearmobil);
console.log(banmobil);
console.log(warnamobil);
console.log(tipe);