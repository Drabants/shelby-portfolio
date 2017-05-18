function cloudMove() {
  var elem = document.getElementById("binaryBites");   
  var pos = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == 1000) {
      pos = -100;
    } else {
      pos++; 
      elem.style.top = pos - 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}
