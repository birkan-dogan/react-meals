import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const AppContext = createContext();

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=a";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const fetchMeals = async (url) => {
    try {
      const response = await axios(url);
      const { data } = response;
      setMeals(data.meals);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, []);
  return (
    <AppContext.Provider value={{ meals }}>{children}</AppContext.Provider>
  );
};

// custom hook to consume context in components
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
