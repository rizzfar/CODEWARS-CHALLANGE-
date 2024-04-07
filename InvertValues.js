function invert(array) {
  let hasInvert = [];
  for(let i = 0; i < array.length; i++) {
   hasInvert.push(-array[i]);
  }
  return hasInvert;
}

const coba = invert([1,2,3,4,5,6]);

console.log(coba)