// 옛날 문법
const xhr = new XMLHttpRequest();

//xhr.open(요청 메서드,요청 URL) -> 요청 URL은 서버에 정해진 형태대로 꼭 해야 됨
xhr.open("POST","https://jsonplaceholder.typicode.com/posts")

//xhr.setRequestHeader(키,벨류) -> 헤더는 보내주는 데이터의 정보
xhr.setRequestHeader("content-type","application/json");

const data = {
  userId : 100,
  title : '비동기통신 엽습',
  body : '이것 저것 보내는 중'
};

xhr.send( JSON.stringify(data) );

xhr.onload = ( ) => {
  console.log(xhr.status); //응답 결과에 해당하는 상태 코드 -> ex) 404뜨는 페이지 : 해당 페이지가 존재X ,문자열형태
  console.log( JSON.parse(xhr.response) ); // 응답 데이터 -> JSON으로 봐꾸면 오브젝트 
}

// 요즘 문법

// fetch('요청주소')
// .then((변수) => 성공 시 처리 할 코드)  -> 한줄이라서 {} 생략 : 보통 첫 줄은 한 줄이라서 이렇게 사용하고
// .then((변수) => 성공 시 처리 할 코드)  -> 이쯤에서 쓸게 많아서 {} 이렇게 사용/람다
// .catch ((e) => 요청 실패 시 처리 할 코드)

const getBtn = document.querySelector('.get'); //클래스로 변수 만듦
const postBtn = document.querySelector('.post');

const title = document.querySelector('.title');
const id = document.querySelector('.id');
const userId = document.querySelector('.userId');
const body = document.querySelector('.body');


// 변수명은 마음대로 리스폰즈,데이터
getBtn.addEventListener('click', ( ) => {
  fetch('https://jsonplaceholder.typicode.com/posts/1') // 요청
    .then( (response)=> response.json() )  // 응답 객체 ->response는 JSON임 그래서 파스작업을 함->오브젝트로 변함
    .then( (data) => {
      title.innerHTML = data.title;
      id.innerHTML = data.id;
      userId.innerHTML = data.userId;
      body.innerHTML = data.body;
     
    })
    .catch((e)=> {    // 응답 실패 시 : 보통 e나 error을 사용
      console.log(e);
    })

}) 

const post_userId = document.querySelector("[name='userId']"); //속성 선택자
const post_title = document.querySelector("[name='title']");
const post_body = document.querySelector("[name='body']");


//게시글 작성 POST
postBtn.addEventListener('click',(e)=>{
  e.preventDefault(); //기본 동작 막기 -> postBtn보다는 form태그에 걸어주는게 좋음

  // 변수를 만들어서 오브젝트 형태로 만듦
  const data = {
    userId : post_userId.value,
    title : post_title.value,
    body : post_body.value
  }

  //요청
  fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      "content-type" : "application/json"
    }
  }).then( response => response.json() )
    .then( data => {
      console.log(data);
      alert('게시글 등록 완료!');

    })
    .catch( e => {
      console.log(e);
      alert('게시글 등록 실패');

    })

})
const async_test = document.querySelector('.async');

//async 를 쓰고 밑에 await을 끄면 async 끝나야지 다음이 실행 됨(async가 오래 걸리면 콘솔 같은 속도가 빠른 것들은 먼저 실행 됨)
//await 강제로 기다리게 하는 것
async_test.addEventListener('click',async() => {

  let a = 1;

  a = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  a = await a.json();

  console.log(a);

})

// 함수 만들기
function add (i) {
  for (i=0; i<10000; i++){

  }
  return i;
}

