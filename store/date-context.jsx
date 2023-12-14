import { createContext } from "react";

export const DateContext = createContext({
  activeDate: new Date(),
  setActiveDate: () => {},
});
