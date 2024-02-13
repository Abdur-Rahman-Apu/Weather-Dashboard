import { WeatherContext } from "../contexts";
import useWeather from "../hooks/useWeather";

const WeatherProvider = ({ children }) => {
  const { weather, error, loading } = useWeather();
  return (
    <WeatherContext.Provider value={{ weather, error, loading }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
