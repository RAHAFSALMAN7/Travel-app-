 # Travel App Planner

## Project Overview
This Travel App Planner helps users plan their trips by fetching location data, weather forecasts, and images using various APIs such as Geonames, Weatherbit, and Pixabay.

 

css
 2. Navigate to the project directory:
cd travel-app-planner

markdown
Copy code
3. Install dependencies:
npm install

perl
 
## API Keys Setup
Create a `.env` file in the root directory and add your API keys:
GEONAMES_API_KEY=your_geonames_key WEATHERBIT_API_KEY=your_weatherbit_key PIXABAY_API_KEY=your_pixabay_key

shell
 

## How to Run the Project
1. Build the project:
npm run build

markdown
 
2. Run the development server:
npm run dev

markdown
 3. Start the express server:
npm run start

shell
 
## Project Structure
Root:
package.json
webpack.config.js
src/
client/
script/
app.js
handleForm.js
views/
index.html
public/
style.scss
server/
server.js
.env
.gitignore
README.md
markdown
Copy code

## APIs Used
- **Geonames**: To fetch location data.
- **Weatherbit**: To retrieve weather forecasts.
- **Pixabay**: To fetch images for the selected location.

## Features
- Fetch location data from Geonames API.
- Fetch weather data from Weatherbit API.
- Fetch images from Pixabay API.
- Countdown to the trip start date.
- Service workers for offline functionality.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.