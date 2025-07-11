const ham = document.querySelector('.navbar-toggler'); //네비바 클래스 가져옴
const list = document.querySelector('.list-group');

//목록이 보이는지 안 보이는지 여부
let isShow = false;

ham.addEventListener('click',() => {

  //뗏다 붙혔다(밑의 코드를 대신하는 코드)
  list.classList.toggle('show');

  // if(isShow){
  //   //isshow가 tryue일 땨 실행되는 영역
  //   //true라는 소리는 목록이 현재 보이고 있다
  //   list.classList.remove('show');
  //   isShow = !isShow;

  // }else {
  //   //isShow가 false일 때 실행되는 영역
  //   //false라는 소리는 목록이 현재 안 보임
  //   list.classList.add('show');
  //   isShow = !isShow;
  // }

  
});

//이게 작동이 되는지 안 되는지 보려면 alert 사용해보기
// ham.addEventListener('click',() => {
//   alert('aaa');
// });

const p = document.querySelectorAll('.list-group-item');

for (let i = 0; i<p.length; i++){

  p[i].addEventListener('click',() => {
    alert('123');
  });

}

