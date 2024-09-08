const API_KEYS = {
    geonames: 'YOUR_GEONAMES_API_KEY',
    weatherbit: 'YOUR_WEATHERBIT_API_KEY',
    pixabay: 'YOUR_PIXABAY_API_KEY'
  };
  
  export function mainFunction() {
    document.getElementById('travel-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const location = document.getElementById('location').value;
      const date = document.getElementById('date').value;
      
      try {
        const geoData = await fetch(`http://api.geonames.org/search?q=${location}&maxRows=1&username=${API_KEYS.geonames}`)
          .then(response => response.json());
        
        const lat = geoData.geonames[0].lat;
        const lon = geoData.geonames[0].lng;
        
        const weatherData = await fetch(`http://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${API_KEYS.weatherbit}`)
          .then(response => response.json());
        
        const imageData = await fetch(`https://pixabay.com/api/?key=${API_KEYS.pixabay}&q=${location}`)
          .then(response => response.json());
        
        displayWeather(weatherData);
        displayImage(imageData);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });
  }
  
  function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    // Display weather data (example)
    weatherInfo.innerHTML = `
      <h2>Weather Forecast</h2>
      <p>Temperature: ${data.data[0].temp}°C</p>
      <p>Description: ${data.data[0].weather.description}</p>
    `;
  }
  
  function displayImage(data) {
    const imageInfo = document.getElementById('image-info');
    // Display image data (example)
    if (data.hits.length > 0) {
      imageInfo.innerHTML = `<img src="${data.hits[0].webformatURL}" alt="Travel Image">`;
    } else {
      imageInfo.innerHTML = '<p>No image available</p>';
    }
  }
  