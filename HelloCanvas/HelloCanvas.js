// HelloCanvas.js (c) 2012 matsuda
function main() {
  // Retrieve <canvas> element
  var canvas = document.getElementById('webgl');

  // Get the rendering context for WebGL
  var gl = getWebGLContext(canvas);
  
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL');
    return;
  }
  else {
    console.log('Successfully created.')
  }

  // Set clear color
 var r = Math.random();
 var g = Math.random();
 var b = Math.random();

  gl.clearColor(r, g, b, 1.0);

  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);
}
