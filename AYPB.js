//CODEWARS CHALLANGE

// function areYouPlayingBanjo(name) {
//   if(name.startsWith("R") || name.startsWith('r')) {
//      return name + " Plays Banjo";
//   } else {
//     return name + " Does Not play Banjo"
//   }
// }

// console.log(areYouPlayingBanjo("Rizky"));

// alternatif kode 

function AreYouPlayingBanjo(nama) {
  return nama.startsWith("r") || nama.startsWith("R") ? nama + " play banjo" : nama + " does not play banjo";
}

console.log(AreYouPlayingBanjo('Rizky'));