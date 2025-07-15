const box = document.querySelector('.box');

let boxY = box.scrollHeight;
console.log(boxY);

let boxHeight = box.clientHeight;
console.log(boxHeight)

let isDisabled = true;

box.addEventListener('scroll', () => {
  let scroll = box.scrollTop;
  
  if( isDisabled && boxHeight + scroll > boxY - 5 ) {
    document.querySelector('#chk').disabled = false;
    isDisabled = false;
  }

})

nextBtn.addEventListener('click',()=>{
  if ( EncodedAudioChunk.checked){
    alert('다음페이지로 이동');

  }else {
    alert('약관동의 안함')
  }
})

//446p.그림으로 볼 수 있음
console.log(window.innerHeight);

console.log(document.body.clientHeight);

const innerHeight = window.innerHeight;
const bodyHeight = document.body.clientHeight;

window.addEventListener('scroll',( ) => {
  console.log(window.scrollY);

  console.log(Window.scrollY);
  const status = window.scrollY / (boxHeight - innerHeight)*100;
  document.querySelector('status-bar').computedStyleMap.width = `${status}%`;
})
