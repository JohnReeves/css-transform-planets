// not needed to move planets with css transforms
var earth = $("#earth");
var moon = $("#moon");

var cx = earth.attr("cx");
var cy = earth.attr("cy");
var count;
console.log("hello");
// use interval timers to update position of the moon
function moveMoons(){
count += 1;
console.log(cx+", "+cy);
moon.attr("cx", cx);
moon.attr("cy", cy);


};

setInterval(moveMoons, 500);