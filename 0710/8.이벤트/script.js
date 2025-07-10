const btn = document.querySelector('.btn');

// btn.onclick = function(){
//   alert('ㅋㅋㅋ');
// }

// addEventLisner 함수를 이용해서 이벤트 설정을 함

//이벤트 종류 : 클릭. 더블클릭. 등등 ...
// 이벤트 핸들러 :  이벤트 발생 시 실행할 코드->함수

// 요소.addEventLitesner( 이벤트 종류, 이벤트 핸들러 )

//이벤트 삭제
// 요소.removeEventListener( 이벤트 종류, 이벤트 핸들러 )

btn.addEventListener( 'click', function(){
  alert('zzzz');
} )

// 위에 걸어둔 이벤트가 안 지워짐(함수가 영역밖으로 나가서 위에서만 하고 끝난거임)
btn.removeEventListener( 'click', function(){
  alert('zzzz');
} )

//함수를 따로 만들어둬야 가능함?? 아마두?