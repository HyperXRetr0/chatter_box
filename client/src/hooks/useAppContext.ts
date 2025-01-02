import { useContext } from "react";
import { AppContext, AppContextType } from "../contexts/AppContext";

export function useAppContext() {
  const context = useContext(AppContext);
  return context as AppContextType;
}
