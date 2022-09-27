import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const AppContext = createContext();

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const fetchMeals = async (url) => {
    try {
      const response = await axios(url);
      const { data } = response;
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMeals(`${allMealsUrl}${searchTerm}`);
  }, [searchTerm]);
  return (
    <AppContext.Provider value={{ meals, loading, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook to consume context in components
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
