var canvas, ctx, flag = false
var currentX = 0
var currentY = 0
var isMousePressed = false
var fillColor = "#ff0000"
var lineWidth = 2

function init() {
  canvas = document.getElementById("democanvas")
  ctx = canvas.getContext("2d")
  ctx.fillStyle = "white"
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.fillCircle = function(x, y, radius, fillColor) {
      this.fillStyle = fillColor;
      this.beginPath();
      this.moveTo(x, y);
      this.arc(x, y, radius, 0, Math.PI * 2, false);
      this.fill();
  };

  canvas.onmousemove = function(e) {
      if (!isMousePressed) {
         return;
      }
      var rect = canvas.getBoundingClientRect();
      var mousePos = {
        x: Math.round((e.clientX-rect.left)/(rect.right-rect.left)*canvas.width),
        y: Math.round((e.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height)
      };
      var x = mousePos.x;
      var y = mousePos.y;
      ctx.fillCircle(x, y, lineWidth, fillColor);
  };
  canvas.addEventListener("mousedown", function(e) {
    isMousePressed = true
  }, false)
  canvas.addEventListener("mouseup", function(e) {
    isMousePressed = false
  }, false)
  canvas.addEventListener("mouseout", function(e) {
    isMousePressed = false
  }, false)
}

function clearContent() {
  swal("Wirklich löschen?", {
        buttons: {
          cancel: "Abbrechen",
          delete: {
            text: "Löschen",
            value: "delete"
          }
        },
        icon: "warning"
      })
      .then((value) => {
        if (value == "delete") {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          ctx.fillStyle = "white"
          ctx.fillRect(0, 0, canvas.width, canvas.height)
        }
      });
}

function downloadCanvas() {
  ReImg.fromCanvas(canvas).downloadPng()
}

$(document).ready(
  init()
)
