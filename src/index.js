import * as weatherData from './weatherData';
import view from './view';
import './styles.css';

const loadLocation = async (position) => {
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

const weatherLocation = () => {
  view.showSpinner();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(loadLocation, () => {
      view.showMessage();
    });
  }
};

const searchWeather = async (city) => {
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

const convert = (unit) => {
  weatherData.convertUnit(unit);
  view.renderWeather(weatherData.weather.data);
};

const init = () => {
  view.addHandlerRender(weatherLocation);
  view.addHandlerSearch(searchWeather);
  view.addHandlerConvert(convert);
};

init();