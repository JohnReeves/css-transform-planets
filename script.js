// not needed to move planets with css transforms
var earth = $("#earth");
var moon = $("#moon");

var cx;
var cy;
var count;
console.log("hello");

// test interval timers to update position of the moon
function moveMoons(){
count += 1;
 cx = earth.attr("cx");
 cy = earth.attr("cy");
console.log(cx+", "+cy);
moon.attr("cx", cx);
moon.attr("cy", cy);

};

setInterval(moveMoons, 500);