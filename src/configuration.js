export const KEY = '7f84933d96924f1148daa50fdda85e85';
export const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
export const REST_COUNTRY_URL = 'https://restcountries.eu/rest/v2/alpha?codes=';
export const UNIT = 'metric';
export const TIMEOUT_SEC = 10;

const timeout = function (s) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (url) {
//   try {
  const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
  const data = await res.json();

  console.log(data);
  if (!res.ok) {
    throw new Error(
      `${data.message[0].toUpperCase() + data.message.slice(1)} (${res.status
      })`,
    );
  }
  return data;
//   } catch (err) {
  // throw err;
//   }
};