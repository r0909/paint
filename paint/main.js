let canvas = document.getElementById('xxx');
let context = canvas.getContext('2d');
let lineWidth = 1

autoSetCanvasSize(canvas)

listenToUser(canvas)


let eraserEnabled = false
pen.onclick = function(){
  eraserEnabled = false
  pen.classList.add('active')
  eraser.classList.remove('active')
}
eraser.onclick = function(){
  eraserEnabled = true
  eraser.classList.add('active')
  pen.classList.remove('active')
}
clear.onclick = function(){
  context.clearRect(0, 0, canvas.width, canvas.height);
}
download.onclick = function(){
  let url = canvas.toDataURL("image/png")
  let a = document.createElement('a')
  document.body.appendChild(a)
  a.href = url
  a.download = 'painting'
  a.target = '_blank'
  a.click()
}


red.onclick = function(){
  context.fillStyle = 'red'
  context.strokeStyle = 'red'
  red.classList.add('active')
  orange.classList.remove('active')
  yellow.classList.remove('active')
  green.classList.remove('active')
  blue.classList.remove('active')
  purple.classList.remove('active')
  pink.classList.remove('active')
  grey.classList.remove('active')
  white.classList.remove('active')
  black.classList.remove('active')


}
orange.onclick = function(){
    context.fillStyle = 'orange'
    context.strokeStyle = 'orange'
    red.classList.remove('active')
    orange.classList.add('active')
    yellow.classList.remove('active')
    green.classList.remove('active')
    blue.classList.remove('active')
    purple.classList.remove('active')
    pink.classList.remove('active')
    grey.classList.remove('active')
    white.classList.remove('active')
    black.classList.remove('active')
  }
  yellow.onclick = function(){
    context.fillStyle = 'yellow'
    context.strokeStyle = 'yellow'
    red.classList.remove('active')
    orange.classList.remove('active')
    yellow.classList.add('active')
    green.classList.remove('active')
    blue.classList.remove('active')
    purple.classList.remove('active')
    pink.classList.remove('active')
    grey.classList.remove('active')
    white.classList.remove('active')
    black.classList.remove('active')
  }
  green.onclick = function(){
    context.fillStyle = 'green'
    context.strokeStyle = 'green'
    red.classList.remove('active')
    orange.classList.remove('active')
    yellow.classList.remove('active')
    green.classList.add('active')
    blue.classList.remove('active')
    purple.classList.remove('active')
    pink.classList.remove('active')
    grey.classList.remove('active')
    white.classList.remove('active')
    black.classList.remove('active')
  }
  blue.onclick = function(){
    context.fillStyle = 'blue'
    context.strokeStyle = 'blue'
    red.classList.remove('active')
    orange.classList.remove('active')
    yellow.classList.remove('active')
    green.classList.remove('active')
    blue.classList.add('active')
    purple.classList.remove('active')
    pink.classList.remove('active')
    grey.classList.remove('active')
    white.classList.remove('active')
    black.classList.remove('active')
  }
  purple.onclick = function(){
    context.fillStyle = 'purple'
    context.strokeStyle = 'purple'
    red.classList.remove('active')
    orange.classList.remove('active')
    yellow.classList.remove('active')
    green.classList.remove('active')
    blue.classList.remove('active')
    purple.classList.add('active')
    pink.classList.remove('active')
    grey.classList.remove('active')
    white.classList.remove('active')
    black.classList.remove('active')
  }
  pink.onclick = function(){
    context.fillStyle = 'pink'
    context.strokeStyle = 'pink'
    red.classList.remove('active')
    orange.classList.remove('active')
    yellow.classList.remove('active')
    green.classList.remove('active')
    blue.classList.remove('active')
    purple.classList.remove('active')
    pink.classList.add('active')
    grey.classList.remove('active')
    white.classList.remove('active')
    black.classList.remove('active')
  }
  grey.onclick = function(){
    context.fillStyle = 'grey'
    context.strokeStyle = 'grey'
    red.classList.remove('active')
    orange.classList.remove('active')
    yellow.classList.remove('active')
    green.classList.remove('active')
    blue.classList.remove('active')
    purple.classList.remove('active')
    pink.classList.remove('active')
    grey.classList.add('active')
    white.classList.remove('active')
    black.classList.remove('active')
  }
  white.onclick = function(){
    context.fillStyle = 'white'
    context.strokeStyle = 'white'
    red.classList.remove('active')
    orange.classList.remove('active')
    yellow.classList.remove('active')
    green.classList.remove('active')
    blue.classList.remove('active')
    purple.classList.remove('active')
    pink.classList.remove('active')
    grey.classList.remove('active')
    white.classList.add('active')
    black.classList.remove('active')
  }
  black.onclick = function(){
    context.fillStyle = 'black'
    context.strokeStyle = 'black'
    red.classList.remove('active')
    orange.classList.remove('active')
    yellow.classList.remove('active')
    green.classList.remove('active')
    blue.classList.remove('active')
    purple.classList.remove('active')
    pink.classList.remove('active')
    grey.classList.remove('active')
    white.classList.remove('active')
    black.classList.add('active')
  }

thin.onclick = function(){
  lineWidth = 1
}
medium.onclick = function(){
    lineWidth = 3
  }
thick.onclick = function(){
  lineWidth = 5
}
function autoSetCanvasSize(canvas) {
  setCanvasSize()

  window.onresize = function() {
    setCanvasSize()
  }

  function setCanvasSize() {
    let pageWidth = document.documentElement.clientWidth
    let pageHeight = document.documentElement.clientHeight

    canvas.width = pageWidth
    canvas.height = pageHeight
  }
}

function drawCircle(x, y, radius) {
  context.beginPath()
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fill()
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1) 
  context.lineWidth = lineWidth
  context.lineTo(x2, y2) 
  context.stroke()
  context.closePath()
}
function listenToUser(canvas) {
  let using = false
  let lastPoint = {
    x: undefined,
    y: undefined
  }
  if(document.body.ontouchstart !== undefined){
    canvas.ontouchstart = function(aaa){
      let x = aaa.touches[0].clientX
      let y = aaa.touches[0].clientY
      console.log(x,y)
      using = true
      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 20, 20)
      } else {
        lastPoint = {
         x,
         y
        }
      }
    }
    canvas.ontouchmove = function(aaa){
      console.log('边摸边动')
      let x = aaa.touches[0].clientX
      let y = aaa.touches[0].clientY

      if (!using) {return}

      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 20, 20)
      } else {
        let newPoint = {
         x,
         y
        }
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        lastPoint = newPoint
      }
    }
    canvas.ontouchend = function(){
      console.log('摸完了')
      using = false
    }
  }else{
    canvas.onmousedown = function(aaa) {
      let x = aaa.clientX
      let y = aaa.clientY
      using = true
      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 20, 20)
      } else {
        lastPoint = {
          "x": x,
          "y": y
        }
      }
    }
    canvas.onmousemove = function(aaa) {
      let x = aaa.clientX
      let y = aaa.clientY

      if (!using) {return}

      if (eraserEnabled) {
        context.clearRect(x - 5, y - 5, 20, 20)
      } else {
        let newPoint = {
          "x": x,
          "y": y
        }
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        lastPoint = newPoint
      }

    }
    canvas.onmouseup = function(aaa) {
      using = false
    }
  }

}
