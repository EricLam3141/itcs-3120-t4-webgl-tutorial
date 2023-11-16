// DrawTriangle.js (c) 2012 matsuda
function main() {  
  // Retrieve <canvas> element
  var canvas = document.getElementById('example');  
  if (!canvas) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  } 

  // Get the rendering context for 2DCG
  var ctx = canvas.getContext('2d');

  // Draw a blue rectangle
  ctx.fillStyle = 'rgba(232, 0, 232, 1.0)'; // Set color to blue

  ctx.fillRect(180, 10, 120, 150);        // Fill a rectangle with the color
  ctx.fillRect(360, 10, 180, 225);        // Fill a rectangle with the color


  for(let j = 1; j < 7; j++) {
    for (let i = 1; i < 7; i++){
      x = (i * 15);
      ctx.fillStyle = `rgb(
        ${Math.floor(255 - 42.5 * i)},
        ${Math.floor(255 - 42.5 * j)},
        0)`;
      ctx.fillRect(x,j*20,22,25);
      }  
  }
}                                                                                 //{1,2,3,4} = {x,y?,width,Length}
