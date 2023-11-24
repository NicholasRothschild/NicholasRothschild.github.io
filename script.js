var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
var W = window.innerWidth;
var H = window.innerHeight;

cnv.width = W;
cnv.height = H;
ctx.fillStyle = "rgba(0,0,0,0)";

ctx.shadowBlur = 10;
ctx.shadowColor = "white";

function animate() {
  let x = W * Math.random();
  let y = H * Math.random();
  let r = 2.5 * Math.random();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();

  setTimeout(animate, 25);
}
animate();

var div1 = document.getElementById('quote');
var div2 = document.getElementById('buttons');

div2.style.height = div1.clientHeight + 6 + 'px';
div2.style.width = div1.clientWidth + 6 + 'px';

document.getElementById("button").addEventListener("click", function() {
  div1.style.zIndex = -1;
  div1.style.borderWidth = 0 + 'px';
  div1.style.backgroundColor = 'rgba(0,0,0,0)'
});
