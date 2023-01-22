import { createContext, useState } from 'react';

const colors=['yellow', 'green', 'blue', 'red', 'white', 'black']

const initialState = {
  colors,
  selectedColor: colors[2],
  setSelectedColor: () => {},
}

export const ClothesContext = createContext();

export const ClothesProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const setSelectedColor = (selectedColor) => {
    setState({
      ...state,
      selectedColor,
    });
  };

  return (
    <ClothesContext.Provider value={{ ...state, setSelectedColor }}>
      {children}
    </ClothesContext.Provider>
  );
}