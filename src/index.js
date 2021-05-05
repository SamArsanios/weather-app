import * as weatherData from './weatherData';
import view from './view';
import './styles.css';

const loadLocation = async function (position) {
  try {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    // Load location weather
    await weatherData.loadWeather([latitude, longitude]);

    // Render weather data
    view.renderWeather(weatherData.weather.data);
  } catch (err) {
    console.error(err);
    view.showMessage(err.message);
  }
};

const weatherLocation = function () {
  view.showSpinner();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(loadLocation, () => {
      view.showMessage();
    });
  }
};

const searchWeather = async function (city) {
  try {
    console.log(city);
    view.showSpinner();
    // Get query from search input
    if (!city) return;

    // Load weather based on search query
    await weatherData.loadWeather(city);

    // Render weather data
    view.renderWeather(weatherData.weather.data);
  } catch (err) {
    console.error(err);
    view.showMessage(err.message);
  }
};

const convert = function (unit) {
  weatherData.convertUnit(unit);
  view.renderWeather(weatherData.weather.data);
};

const init = function () {
  view.addHandlerRender(weatherLocation);
  view.addHandlerSearch(searchWeather);
  view.addHandlerConvert(convert);
};

init();