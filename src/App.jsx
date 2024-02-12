import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/Weather/WeatherBoard";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="">
          <WeatherBoard />
        </section>
      </main>
    </>
  );
}

export default App;
