function showHide (state){
  // document.getElementById('ab').style.display='block' ;

  //JS문법
  // document.getElementById('ab').style.display = state;

  //jQuery 문법
  //위의 style이 밑의 css임
  $('#ab').css('display',state);
}

// function hide() {
//   console.log('aa')
//   document.getElementById('ab').style.display ='none';
// }

function showMsg(msg){
 // JS문법
  // document.querySelector('.alret').innerHTML=msg;

  //jQuery 문법
  $('alret').html(msg);
}