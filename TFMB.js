// CODEWARS CHALLANGE THE FEAST OF MANY BEAST
function feast(beast, dish) {
  const panjangKataHewan = beast.length;
  const panjangKataHidangan = dish.length;
  if(beast[0] === dish[0] && beast[panjangKataHewan - 1] === dish[panjangKataHidangan - 1]) {
    return true;
  } else {
    return false;

  }
}

console.log(feast('great blue heron', 'garlic naan'));