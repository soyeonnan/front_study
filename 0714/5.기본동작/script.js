document.querySelector('a').addEventListener('click',(e )=> {

  //기본 동작 막아줌
  e.preventDefault();
    // alert('네이버로 이동합니다');
    console.log('aaa');
})

//우클릭시 실행
document.querySelector('p').addEventListener('contextmenu',( e)=> {
  e.preventDefault();
  alert('aa');
})

// 드래그 기본 동작 막기
document.querySelector('p').addEventListener('selectstart',(e)=>{
  e.preventDefault();
  alert('드래그 놉!');
})

document.querySelector('button').addEventListener('click',(e)=>{
  // 0 : 왼쪽, 1 : 가운데, 2 : 오른쪽
  console.log(e.button);

  console.log(e.altKey);
  console.log(e.ctrlKey);
  console.log(e.shiftKey);

  if (e.ctrlKey) {
    alert('컨트롤 클릭')
  }

  if (e.ctrlKey && e.shiftKey){
    alert('컨트롤 쉬프트 클릭')
  }
})