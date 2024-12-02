let dot = document.getElementById('dot');
let length = 300; 
//한 번에 이동할 거리
let x=window.innerWidth/2, y=window.innerHeight/2;
let direction = 'right';
//처음에는 오른쪽으로 이동

function moveDot() {
  if(direction === 'right') {
    x += length;
    direction = 'down';
    //오른쪽 이동 후 아래로 이동
  } else if (direction === 'down') {
    y+=length;
    direction = 'left';
  } else if (direction === 'left') {
    x -= length;
    direction = 'up';
  } else if (direction === 'up') {
    y-=length;
    direction = 'right'
  }

  //점 위치 설정
  dot.style.left = `${x-dot.offsetWidth/2 - length/2}px`;
  dot.style.top = `${y-dot.offsetHeight/2 - length/2}px`;
}

//점을 반복적으로 이동
//비동기
setInterval(moveDot,1000);