import { createContext } from "react";

export const DateContext = createContext({
  date: new Date(),
  setDate: () => {},
});
