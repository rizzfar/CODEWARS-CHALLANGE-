class Angkot {
  constructor(supir, penumpang) {
    this.supir = supir;
    this.penumpang = penumpang;
    this.uangKas = 0;
  }
  
  cekPenumpang() {
    if (this.penumpang.length === 0) {
      return 'Penumpang masih kosong';
    } else {
      console.log(this.penumpang);
      return `Penumpang berjumlah ${this.penumpang.length} orang`;
    }
  }

  isiPenumpang(namaPenumpang) {
    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] === namaPenumpang.toLowerCase()) {
        return `Penumpang bernama ${namaPenumpang} sudah ada di dalam angkot`;
      }
    }
    this.penumpang.push(namaPenumpang.toLowerCase());
    return `Penumpang berhasil ditambahkan`;
  }

  penumpangTurun(namaPenumpang, ongkos, jarak) {
    for(let i = 0; this.penumpang.length; i++) {
      if(this.penumpang[i] === namaPenumpang.toLowerCase() || jarak !== 0) {
        this.uangKas += (ongkos * jarak);
        this.penumpang.splice(i, 1);
          return `Penumpang ${namaPenumpang} telah turun. Uang kas bertambah sebesar ${ongkos}.`;
      }
    }

    return `Penumpang ${namaPenumpang} tidak di temukan dalam angkot`;
  }
}

const transBandung = new Angkot('Soleh', []);
