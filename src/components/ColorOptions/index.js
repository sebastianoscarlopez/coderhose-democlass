import './styles.css';

const ColorOption = ({ color, isSelected, onColorChange }) => {
  console.log('ColorOption', color, isSelected, onColorChange);
  return (
    <div
      className={`color-option ${isSelected ? 'selected' : ''}`}
      style={{ backgroundColor: color }}
      onClick={() => onColorChange(color)}
    />
  );
}

const ColorOptions = ({ colors, selectedColor, onColorChange }) => {
  return (
    <div className="color-options">
      {colors.map((color, index) => (
        <ColorOption
          key={index}
          color={color}
          isSelected={color === selectedColor}
          onColorChange={onColorChange}
        />
      ))}
    </div>
  );
}

export default ColorOptions;