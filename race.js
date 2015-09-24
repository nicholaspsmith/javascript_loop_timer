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

//////////////////////////////////////
var tenmil = [];
for (var i = 0; i < 10000000; i++) {
  tenmil.push(i);
}

// Test different IIFEs
var tim1 = new Date();
tenmil.forEach(function(item,index){
  // Crockford recommends this one
  (function(){var i = 0; index++;}());
});
var tim2 = new Date();
var diff1 = tim2 - tim1;
console.log('(function(){}()) took: ' + diff1);

var tim1b = new Date();
tenmil.forEach(function(item,index){
  // but this one is faster!
  (function(){var i = 0; index++;})();
});
var tim2b = new Date();
var diff1b = tim2b - tim1b;
console.log('(function(){})() took: ' + diff1b);


var tim1c = new Date();
tenmil.forEach(function(item,index){
  var i = function(){ var i = 0; index++; }();
});
var tim2c = new Date();
var diff1c = tim2c - tim1c;
console.log('var i = function(){}(); took: ' + diff1c);

var tim1d = new Date();
tenmil.forEach(function(item,index){
  0, function(){var i = 0; index++;}();
});
var tim2d = new Date();
var diff1d = tim2d - tim1d;
console.log('0, function(){}(); took: ' + diff1d);


var tim1e = new Date();
tenmil.forEach(function(item,index){
  !function(){var i = 0; index++;}();
});
var tim2e = new Date();
var diff1e = tim2e - tim1e;
console.log('!function(){}(); took: ' + diff1e);

var tim1f = new Date();
tenmil.forEach(function(item,index){
  ~function(){var i = 0; index++;}();
});
var tim2f = new Date();
var diff1f = tim2f - tim1f;
console.log('~function(){}(); took: ' + diff1f);
