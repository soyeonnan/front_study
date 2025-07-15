const countryCoordinates = {
  한국: {
    latitude: 37.5665,   
    longitude: 126.9780
  },
  일본: {
    latitude: 35.6895,   
    longitude: 139.6917
  },
  미국: {
    latitude: 38.9072,   
    longitude: -77.0369
  },
  영국: {
    latitude: 51.5074,   
    longitude: -0.1278
  },
  프랑스: {
    latitude: 48.8566,   
    longitude: 2.3522
  },
  알제리: {
    latitude: 36.7538,   
    longitude: 3.0588
  }
};




const selectBox = document.querySelector('select');



selectBox.addEventListener('change',()=> {
  
  
  const name = selectBox.value;
  console.log(countryCoordinates[name].latitude);
  console.log(countryCoordinates[name].longitude);
  
  const APIKEY = '2d34fef5d380a76c310d49c2412baf54'; 
  let URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${APIKEY}`;
  
  console.log(URL);
  
 
})
  
console.log(countryCoordinates.미국.latitude);