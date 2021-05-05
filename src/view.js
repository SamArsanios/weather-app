class View {
  constructor() {
    this.parentElement = document.querySelector('.city-search-result');
    this.searchBar = document.querySelector('.city-search-bar');
    this.message = "What's the weather like today? ☁";
  }

  clearInput() {
    this.searchBar.querySelector('.city-search-bar').value = '';
  }

  clear() {
    this.parentElement.innerHTML = '';
  }

  getWeather() {
    const query = this.searchBar.querySelector('.city-search-bar').value;

    this.clearInput();
    return query;
  }

  renderWeather(data) {
    if (!data) return;

    const htmlMarkup = `
      <div class="city-weather">
        <span>DATE:</span>
        <p><span>${data.date}</span></p><br>
        <h2>${data.name}, ${data.country}</h2>
        <div class="temperature-container">
          <img src="${data.iconSmall}" class="weather-icon" alt="small weather icon">
          <h1>${data.temp}<sup>°${data.unit === 'metric' ? 'C' : 'F'}</sup></h1> 
        </div>
        <p>${data.description}</p>
        <div class="weather-details">
          <p>Temperature: ${data.temperature} °${data.unit === 'metric' ? 'C' : 'F'}</p>
          <p>Humidity: ${data.humidity}%</p>
          <p>Sunrise: ${data.sunrise}</p>
          <p>Sunset: ${data.sunset}</p>
        </div>
        <div class="degree-switch">
          <div class="degree-select celcius ${data.unit === 'metric' ? 'degree-select-active' : ''}" data-unit="metric">C</div>
          <div class="degree-select fahrenheit ${data.unit === 'imperial' ? 'degree-select-active' : ''}" data-unit="imperial">F</div>
        </div>
      </div>
    `;

    this.clear();
    this.parentElement.insertAdjacentHTML('afterbegin', htmlMarkup);
  }

  showMessage(message = this.message) {
    const htmlMarkup = `<span class="weather-message">${message}</span>`;
    this.clear();
    this.parentElement.insertAdjacentHTML('afterbegin', htmlMarkup);
  }

  showSpinner() {
    const htmlMarkup = '<div class="weather-container-loader"></div>';
    this.clear();
    this.parentElement.insertAdjacentHTML('afterbegin', htmlMarkup);
  }

  addHandlerRender(handler) {// eslint-disable-line
    window.addEventListener('load', handler);
  }

  addHandlerSearch(handler) {
    this.searchBar.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(e.target.city.value);
      handler(e.target.city.value);
    });
  }

  addHandlerConvert(handler) {
    this.parentElement.addEventListener('click', (e) => {
      const btn = e.target.closest('.degree-select');
      if (!btn || btn.classList.contains('degree-select-active')) return;

      handler(btn.dataset.unit);
    });
  }
}

export default new View();