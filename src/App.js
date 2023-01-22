import { useState } from 'react';
import ItemsList from './components/ItemsList';
import items from './data/items.json';
import ItemSelected from './components/ItemSelected';
import ColorOptions from './components/ColorOptions';

import './App.css';

const colors=['yellow', 'green', 'blue', 'red', 'white', 'black']

function App() {
  const [itemSelected, setItemSelected] = useState(items[0]);
  const [selectedColor, setSelectedColor] = useState(colors[2]);

  return (
    <div className="App">
      <ItemsList items={items} itemSelected={itemSelected} onSelectChange={setItemSelected}/>
      <ItemSelected
        itemSelected={itemSelected}
        selectedColor={selectedColor}
      />
      <ColorOptions
        colors={colors}
        selectedColor={selectedColor}
        onColorChange={setSelectedColor}
      />
    </div>
  );
}

export default App;
