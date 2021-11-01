export const getCity = (city) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7573bfcc9c8afca4ce91f2c196b69354`
  )
    .then((response) => response.json())
    .catch((err) => console.log(err.message));
};
