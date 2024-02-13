import { useContext, useEffect, useState } from "react";
import redHeartIcon from "../../assets/heart-red.svg";
import heartIcon from "../../assets/heart.svg";
import { FavoriteContext } from "../../contexts";
import useWeather from "../../hooks/useWeather";

export default function AddToFavourite() {
  const [favorite, toggleFavorite] = useState(false);

  const { favorites, addToFavorite, removeFromFavorite } =
    useContext(FavoriteContext);

  const { weather, error, loading } = useWeather();

  const { latitude, longitude, location } = weather;

  useEffect(() => {
    console.log(favorites, location);
    const found = favorites.find((fav) => fav.location === location);
    console.log(found);
    toggleFavorite(found);
  }, [location]);

  const handleFavorite = () => {
    const found = favorites.find((fav) => fav.location === location);

    if (!found) {
      addToFavorite(latitude, longitude, location);
    } else {
      removeFromFavorite(location);
    }
    toggleFavorite(!favorite);
  };
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavorite}
        >
          <span>Add to Favourite</span>
          <img src={favorite ? redHeartIcon : heartIcon} alt="heart icon" />
        </button>
      </div>
    </div>
  );
}
