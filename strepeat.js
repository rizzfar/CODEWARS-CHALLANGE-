function repeatStr (n, s) {
  let tampil = ''
  for(let i = 1; i <= n; i++) {
    tampil = tampil + s;
  }
  return tampil;
}

let coba = repeatStr(3, '*')
console.log(coba)

