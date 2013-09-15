var ctx = document.getElementById('gleam').getContext('2d');

ctx.font = '4em Helvetica' // Maven Pro
ctx.fillStyle = 'rgba(0, 0, 0, 1)';
blackOut()
ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';

var hue = 0,
    i   = 0,
    phrase = 'CLINKLE',
    length = phrase.length,
    height = ctx.canvas.height/2;

setInterval(function() {
  gleam();
}, 2500)

setInterval(blackOut, 150)

function gleam() {
  var xPos = ((ctx.canvas.width - ctx.measureText(phrase).width - 200) / 2)
  for (var n = 0; n < length; n++) {
    setTimeout(draw.bind(null, phrase[n], xPos, height), 100 * n)
    xPos += ctx.measureText(phrase[n]).width + 25
  }
}

function draw(text, x, y) {
  ctx.shadowBlur = 10;
  ctx.lineWidth = 2 + 2 * Math.random();
  hue = (hue + 10 * Math.random()) % 360;
  ctx.strokeStyle = 'hsl(' + hue + ', 50%, 50%)';
  ctx.shadowColor = 'hsl(' + hue + ', 50%, 50%)';
  ctx.strokeText(text, x, y)
  ctx.shadowBlur = 0;
}

function blackOut() {
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  redrawText()
}

function redrawText() {
  ctx.lineWidth = 1
  ctx.strokeStyle = 'grey'
  var phrase = 'CLINKLE'
  var xPos = ((ctx.canvas.width - ctx.measureText(phrase).width - 200) / 2)
  phrase.split('').forEach(function(letter, index) {
    ctx.strokeText(letter, xPos, height);
    xPos += ctx.measureText(letter).width + 25
  })
}
