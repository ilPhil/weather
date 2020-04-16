const BASE_URL = "https://api.openweathermap.org/data/2.5";
const APP_ID = "d522a71a016390b0ed9a9ecc158c571a";

export default function getCityWeather(cities) {
  const Requests = cities.map((city) => {
    const url = `${BASE_URL}/weather?q=${city}&units=metric&appid=${APP_ID}`;
    return fetch(url).then((response) => response.json());
  });

  return Promise.all(Requests);
}
