import { useContext } from "react";
import Cloud from "../../assets/cloud.svg";
import Haze from "../../assets/haze.svg";
import Snow from "../../assets/icons/snow.svg";
import Sunny from "../../assets/icons/sunny.svg";
import PinImg from "../../assets/pin.svg";
import Rain from "../../assets/rainy.svg";
import Thunder from "../../assets/thunder.svg";
import { WeatherContext } from "../../contexts";
import { getDateAndTime } from "../../utils/date-util";

export default function WeatherHeadline() {
  const { weather, error, loading } = useContext(WeatherContext);

  const { climate, temperature, location, time } = weather;

  const getWeatherIcon = (climate) => {
    switch (climate) {
      case "Rain":
        return Rain;
      case "Snow":
        return Snow;
      case "Clouds":
        return Cloud;
      case "Thunder":
        return Thunder;
      case "Clear":
        return Sunny;
      case "Fog":
        return Haze;
      case "Haze":
        return Haze;
      case "Mist":
        return Haze;

      default:
        return Sunny;
    }
  };
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={PinImg} alt="pin img" />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getDateAndTime(time, "time", false)} -{" "}
        {getDateAndTime(time, "date", false)}
      </p>
    </div>
  );
}
