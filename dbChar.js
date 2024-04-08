const doubleChar = (str) => {
  let hasil = '';

  for(let i = 0; i < str.length; i++) {
    hasil = hasil + str[i] + str[i];
  }

  return hasil;
}

const percobaan = doubleChar('hello world');

console.log(percobaan);