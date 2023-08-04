import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const AppContext = createContext(null);

const movieFromLocalStorage = JSON.parse(localStorage.getItem("movie") || "[]");

const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(movieFromLocalStorage);
  const [search, setSearch] = useState(false);

  const handleToggleFavorite = useCallback(
    (movie) => {
      const exist = favorites.find((favMovie) => favMovie.id === movie.id);

      if (!exist) {
        setFavorites([...favorites, movie]);
      } else {
        const newItems = favorites.filter(
          (favMovie) => favMovie.id !== movie.id
        );
        setFavorites(newItems);
      }
    },
    [favorites]
  );

  const handleClearFavorites = () => {
    setFavorites([]);
  };

  const handleToggleSearch = () => {
    setSearch(!search);
  };

  const handleHideSearch = () => {
    setSearch(false);
  };

  useEffect(() => {
    localStorage.setItem("movie", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <AppContext.Provider
      value={{
        favorites,
        handleToggleFavorite,
        handleClearFavorites,
        search,
        handleToggleSearch,
        handleHideSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
