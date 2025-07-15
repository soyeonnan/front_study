function connectGeo(position) {
  const weatherName = document.querySelector('.weather > h3');
  const weatherImg = document.querySelector('.weather > img');
  const weatherTemp = document.querySelector('.temp');
  const weatherDesc = document.querySelector('.desc');
  
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  console.log(`위도:${lat} 경도:${lon}`);

  const APIKEY = '2d34fef5d380a76c310d49c2412baf54';              //?->쿼리 스트링 , &는 구분기호
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric&lang=kr`;
 

  fetch(URL)
    .then(response => response.json())
    .then(data => {
      const name = data.name;
      const temp = data.main.temp;
      const desc = data.weather[0].descrition;
      const icon = data.weather[0].icon;

      weatherName.innerHTML = name;
      weatherTemp.innerHTML = temp;
      weatherDesc.innerHTML = desc;

      const iconURL = 'https://openweahermap.org/img/wn/10d@2x.png'
      weatherImg.setAttribute('src',iconURL)
    })

}

function errorGeo( ) {
  alert('위치 정보 연결 실패')
}

navigator.geolocation.getCurrentPosition(connectGeo, errorGeo);

// const cloud = document.querySelector('.get')


