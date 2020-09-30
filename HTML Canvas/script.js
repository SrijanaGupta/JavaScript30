const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
console.log(canvas);
console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = 100;
let isDraw = false;
let direction = true;
let lastX = 0;
let lastY = 0;
let hue = 0;

canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',()=> isDraw= false);
canvas.addEventListener('mousedown',(e)=>{
    isDraw=true
    lastY = e.offsetY;
    lastX = e.offsetX;});
canvas.addEventListener('mouseout',()=>isDraw=false);

function draw(e){
    if(!isDraw) return
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
    hue++;

    if (hue >= 360) {
        hue = 0;
      }
      if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
      }
    
      if(direction) {
        ctx.lineWidth++;
      } else {
        ctx.lineWidth--;
      }
}