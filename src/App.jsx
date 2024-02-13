import Page from "./Page";
import FavoriteProvider from "./Provider/FavoriteProvider";
import LocationProvider from "./Provider/LocationProvider";
import WeatherProvider from "./Provider/WeatherProvider";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <Page />
        </FavoriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
