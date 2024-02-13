import React, { useContext, useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/Weather/WeatherBoard";
import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/sunny.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";
import { WeatherContext } from "./contexts";

export default function Page() {
  const { weather, loading } = useContext(WeatherContext);

  const [bgImg, setBgImg] = useState("");

  useEffect(() => {
    const climate = getBackgroundImage(weather.climate);
    setBgImg(climate);
  }, [weather.climate]);

  function getBackgroundImage(climate) {
    switch (climate) {
      case "Rain":
        return RainyDayImage;
      case "Clouds":
        return ScatterdCloudsImage;
      case "Clear":
        return ClearSkyImage;
      case "Snow":
        return SnowImage;
      case "Thunder":
        return ThunderStormImage;
      case "Fog":
        return WinterImage;
      case "Haze":
        return FewCloudsImage;
      case "Mist":
        return MistImage;
      default:
        return ClearSkyImage;
    }
  }
  return (
    <div
      style={{
        backgroundImage: `url('${bgImg}')`,
      }}
      className="grid place-items-center h-screen bg-no-repeat bg-cover"
    >
      {loading.state ? (
        <p>{loading.message}</p>
      ) : (
        <>
          <Header />
          <main>
            <section className="">
              <WeatherBoard />
            </section>
          </main>
        </>
      )}
    </div>
  );
}
