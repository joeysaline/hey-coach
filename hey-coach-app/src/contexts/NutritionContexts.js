import React, { useContext, useState, useEffect } from "react";
import { useAuth } from "../user-auth/contexts/AuthContexts";

const NutritionContext = React.createContext();

export function useNutrition() {
  return useContext(NutritionContext);
}

export function NutritionProvider({ children }) {
  const { currentUser } = useAuth();
  const [nutritionList, setNutritionList] = useState([]);
  const data = ["Apple", "Eggs", "Banana", "Chicken", "Steak"];
  setNutritionList(data);
  const value = {
    nutritionList,
  };
  return (
    <NutritionContext.Provider value={value}>
      {!loading && children}
    </NutritionContext.Provider>
  );
}
