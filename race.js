var million = [];
for (var i = 0; i < 1000000; i++) {
  million.push(i);
}

var a1 = [];
var a2 = [];

var d3 = new Date();
million.forEach(function(item,index){
  a1.push(item);
});
var d4 = new Date();
var t2 = d4 - d3;
console.log('foreach took: ' + t2 + ' milliseconds');

var d1 = new Date();
for (var i = 0; i < million.length; i++) {
  a2.push(million[i]);
}
var d2 = new Date();
var t1 = d2 - d1;
console.log('for loop took: ' + t1 + ' milliseconds');


if (t2 > t1) {
  console.log('for loop was faster by ' + (t2 - t1) + ' milliseconds');
} else if (t1 > t2) {
  console.log('foreach was faster by ' + (t1 - t2) + ' milliseconds');
} else {
  console.log('they took the same amount of time');
}
