const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const pre = document.querySelector('.pre');
const next = document.querySelector('.next');

const carousel = document.querySelector('.carousel');

//현재 보고있는 캐러셀의 이미지 번호
let slidNo = 1;

btn1.addEventListener('click',() => {
  carousel.style.transform = 'translateX(0)'
  slidNo = 1;
})

btn2.addEventListener('click',() => {
  carousel.style.transform = 'translateX(-100vw)'
  slidNo = 2;
})

btn3.addEventListener('click',() => {
  carousel.style.transform = 'translateX(-200vw)'
  slidNo = 3;
})

//깃허브 다시 보기 

pre.addEventListener('click',() => {
  if( slidNo === 1 ) {
    return;

  carousel.style.transform = `translateX(-${slidNo-2}00vw)`;
  slidNo--;
  
  //   carousel.style.transform = 'translateX(0vw)'
  //   slidNo--;
  // }else if ( slidNo === 3 ){
  //   carousel.style.transform = 'translateX(-100vw)'
  //   slidNo--;
  }
})

next.addEventListener('click',() => {
  if( slidNo >= 3){

    return;

  carousel.style.transform = `translateX(-${slidNo+2}00vw)`;
  slidNo++;
  }
})

// for (int i =0; i<pre.le)



// for (int i=0; i<; i++){
//   btn[i].carousel.style.transformX(-100vw);
// }