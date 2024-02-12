import { useEffect, useState } from "react";

const useWeather = () => {
  const [weather, setWeather] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const [loading, setLoading] = useState({ state: false, message: "" });

  const [error, setError] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({ ...loading, state: true, message: "Fetching weather data" });

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.VITE_WEATHER_API_KEY
        }&units=metric`
      );

      if (!response.ok) {
        const errorMsg = `Fetching error data failed:${response.status}`;
        throw new Error(errorMsg);
      }

      const data = await response.json();

      const updatedData = {
        ...weather,
        location: data?.name,
        climate: data?.weather?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude,
        latitude,
      };

      setWeather(updatedData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({ state: true, message: "Fetching location..." });
    navigator.geolocation.getCurrentPosition(function (position) {
      fetchWeatherData(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  return {
    weather,
    error,
    loading,
  };
};

export default useWeather;
