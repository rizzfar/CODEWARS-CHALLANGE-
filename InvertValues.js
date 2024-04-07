function invert(array) {
  let hasInvert = [];
  for(let i = 0; i < array.length; i++) {
    turnArrayInvers(array, hasInvert, i)
  }
  
  return hasInvert;
}

function turnArrayInvers (array, hasInvert, i) {
  return hasInvert.push(-array[i]);
}

const coba = invert([1,2,3,4,5,6]);

console.log(coba)