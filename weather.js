//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
function weatherFetch() {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=a93062c563cc61e1b58ef6f77d9e3bef'
  )
    .then((resp) => {
      return resp.json();
    })
    .then((resp) => {
      const container = document.createElement('div');
      container.setAttribute('class', 'main-container');

      container.innerHTML = `
        <div id="city-name-box">
          <h4>${resp.name}</h4>
        </div>

        <div id="city-name">
          <h3>${resp.name}, ${resp.sys.country}</h3>
          <p>Sunday 27 September 2020</p>
        </div>

        <div id="temp">
          <h1>${Math.floor(resp.main.temp - 273)}°c</h1>
        </div>

        <div id="min-max">
          <h3>${resp.weather[0].main}</h3>
          <p>${Math.floor(resp.main.temp_max - 273)}°c / ${Math.floor(
        resp.main.temp_min - 273
      )}°c</p>
        </div>`;
      console.log(resp);

      document.body.append(container);
    });
}

weatherFetch();
