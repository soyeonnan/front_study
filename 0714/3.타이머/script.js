//정해진 시간이 흐른 뒤 해당 코드가 작동되도록 함
//setTimeout (콜백함수, 시간(ms));
//5초 뒤에 콜백함수가 실행됨 (5000)

const time = document.querySelector('.time');

let t = 5;

setInterval(()=> {
  t--;
  time.innerHTML = t;



},1000);

setTimeout(() => {

  document.querySelector('.alert').style.display = 'none';
  
}, 5000);

//정해진 시간이 흐른 뒤 해당 코드가 반복하며 작동
// setInterval(콜백함수, 시간 (ms));
setInterval (() => {
  console.log('2초마다 실행되는 코드임');
  
},2000);

let timer

document.querySelector('.btn').addEventListener('click',() =>{

  clearTimeout(timer)

  timer = setTimeout(() =>{
    console.log('클릭하면 3초뒤에 나타남');
  },3000);

})

const clock = document.querySelector('.clock');

function insertTime() {
  // clock.innerHTML = (date.getMinutes());
  
  const date = new Date();
  const hour = String(date.getHours()).padStart(2,0);
  const minute = String(date.getMinutes()).padStart(2,0);
  const second = String(date.getSeconds()).padStart(2,0);
  
  clock.innerHTML = `${hour} : ${minute} : ${second}`;
}

insertTime();
setInterval( insertTime, 1000 );


// (채울 칸수,시작할 숫자? = 001)
//padend는 앞부터 채워줌 (100)
let a = 1;

console.log( a.padStart(2,0) );




//날짜 관련된 함수들
//현재 날짜와 시간
// const date = new Date();
// console.log(date);

// 년도 추출
// console.log(date.getFullYear());

//월 추출 (0~11로 출력)
// console.log(date.getMonth());

// 일 추출
// console.log(date.getDate());

//  요일 추출 (일요일 = 0, 6=토요일 )
// console.log(date.getDay());

// 시간 추출
// console.log(date.getHours());

// 분 추출
// console.log(date.getMinutes());

// 초 추출
// console.log(date.getSeconds());