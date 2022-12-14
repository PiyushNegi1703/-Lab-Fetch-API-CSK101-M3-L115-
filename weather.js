//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
function calcTime(offset) {
  var d = new Date();

  var utc = d.getTime() + d.getTimezoneOffset() * 60000;

  var nd = new Date(utc + 3600000 * offset);

  return nd.toDateString();
}

const input = document.getElementById('city-name-box');

function weatherFetch() {
  var city = input.value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a93062c563cc61e1b58ef6f77d9e3bef`
  )
    .then((resp) => {
      return resp.json();
    })
    .then((resp) => {
      const container = document.querySelector('.main-container');
      console.log(resp);

      if (resp.cod == 200) {
        container.innerHTML = `
        <div id="city-name">
          <h3>${resp.name}, ${resp.sys.country}</h3>
          <p>${calcTime(resp.timezone / 3600)}</p>
        </div>

        <div id="temp">
          <h1>${Math.floor(resp.main.temp - 273)}°c</h1>
        </div>

        <div id="min-max">
          <h3>${resp.weather[0].main}</h3>
          <p>${Math.floor(resp.main.temp_min - 273)}°c / ${Math.floor(
          resp.main.temp_max - 273
        )}°c</p>
        </div>`;
      } else {
        container.innerHTML = `
        <div id="city-name">
          <h3>Please enter a valid city/country name</h3>
        </div>`;
      }
    });

  document.getElementById('button').style.borderBottom = 'none';
  setTimeout(() => {
    document.getElementById('button').style.borderBottom =
      '4px solid rgba(255, 255, 255, 0.5)';
  }, 100);
}

input.addEventListener('keydown', (e) => {
  if (e.code == 'Enter') {
    weatherFetch();
  }
});
