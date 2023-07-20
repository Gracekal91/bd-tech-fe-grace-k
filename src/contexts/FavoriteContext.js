import { createContext, useContext, useState } from "react";


const FavoritesContext = createContext();

export const useFavoritesContext = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);


    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};
