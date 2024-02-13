import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/Weather/WeatherBoard";
import FavoriteProvider from "./Provider/FavoriteProvider";
import LocationProvider from "./Provider/LocationProvider";
import WeatherProvider from "./Provider/WeatherProvider";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <div className="grid place-items-center h-screen">
            <Header />
            <main>
              <section className="">
                <WeatherBoard />
              </section>
            </main>
          </div>
        </FavoriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
