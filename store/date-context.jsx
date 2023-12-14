import { createContext, useState } from "react";

export const DateContext = createContext({
  activeDate: new Date(),
  setActiveDate: (day) => {},
});

export const DateContextProvider = ({ children }) => {
  const [pressedDate, setPressedDate] = useState(new Date());

  const pressedDateHandler = (day) => {
    setPressedDate(day);
    console.log(pressedDate);
  };

  const value = {
    activeDate: pressedDate,
    setActiveDate: pressedDateHandler,
  };

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};
