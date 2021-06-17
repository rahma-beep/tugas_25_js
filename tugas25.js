var deret = [2,39,76,50,9,7,41,2,24,1,16];
console.log("Sebelumnya : " + deret);

var ascending = deret.sort();
console.log("Ascending : " + ascending);

var descending = deret.reverse();
console.log("Descending : " + descending);

var filter = deret.filter(angka=> {
  return angka > 10
});

console.log("Filter > 10 : " + filter);
