import { useState } from 'react';
import ItemsList from './components/ItemsList';
import items from './data/items.json';
import ItemSelected from './components/ItemSelected';
import ColorOptions from './components/ColorOptions';
import { ClothesProvider } from './context';

import './App.css';

function App() {
  const [itemSelected, setItemSelected] = useState(items[0]);

  return (
    <ClothesProvider>
      <div className="App">
        <ItemsList items={items} itemSelected={itemSelected} onSelectChange={setItemSelected}/>
        <ItemSelected
          itemSelected={itemSelected}
        />
        <ColorOptions />
      </div>
    </ClothesProvider>
  );
}

export default App;
