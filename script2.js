const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2245ffd263mshad0cf0ba143cf29p1fd516jsnd71e8de98c91",
    "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
  },
};

fetch(
  "https://community-open-weather-map.p.rapidapi.com/weather?q=Chicago&units=imperial",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response.weather[0].main))
  .catch((err) => console.error(err));
