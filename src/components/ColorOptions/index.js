import { useContext } from 'react';
import { ClothesContext } from '../../context';

import './styles.css';

const ColorOption = ({ color }) => {
  const { selectedColor, setSelectedColor } = useContext(ClothesContext);
  const isSelected = color === selectedColor;

  return (
    <div
      className={`color-option ${isSelected ? 'selected' : ''}`}
      style={{ backgroundColor: color }}
      onClick={() => setSelectedColor(color)}
    />
  );
}

const ColorOptions = () => {
  const { colors } = useContext(ClothesContext);

  return (
    <div className="color-options">
      {colors.map((color) => (
        <ColorOption
          color={color}
        />
      ))}
    </div>
  );
}

export default ColorOptions;