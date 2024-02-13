import { FavoriteContext } from "../contexts";
import useLocalStorage from "../hooks/useLocalStorage";

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const addToFavorite = (latitude, longitude, location) => {
    setFavorites([
      ...favorites,
      {
        latitude,
        longitude,
        location,
      },
    ]);
  };

  const removeFromFavorite = (location) => {
    const filter = favorites.filter((fav) => fav.location !== location);
    setFavorites(filter);
  };
  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorite, removeFromFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
