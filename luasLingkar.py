# PROGRAM HITUNG LUAS DAN KELILING SEBUAH LINGKARAN

# pengguna memasukkan angka jari jari 

def hitungKeliling(jarijari) :
  return 2 * 3.14 * jarijari

def hitungLuas(jarijari) :
  return 3.14 * jarijari * jarijari 

def hitung(jarijari) :
  keliling = hitungKeliling(jarijari)
  luas = hitungLuas(jarijari)

  print(f"Luas lingkaran nya adalah : {int(luas)}")
  print(f"Keliling lingkaran nya adalah : {int(keliling)}")

jariJari = int(input("Masukkan Jari jari lingkaran : "))

if(jariJari <= 0 ) :
  print('Input jari jari tidak boleh 0 atau minus, silahkan input kembali')
else :  
  print('')
  hitung(jariJari)