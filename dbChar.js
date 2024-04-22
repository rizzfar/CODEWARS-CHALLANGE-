const repeatDoubleStr = (str) => {
  let result = '';
  for(let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }
  return str 
}

const coba = repeatDoubleStr('hello');
console.log(coba)