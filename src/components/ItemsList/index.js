import './styles.css'

const ItemsList = ({ items, itemSelected, onSelectChange }) => {
  return <ul>
    {items.map(item => (
      <li
        key={item.id}
        onClick={() => onSelectChange(item)}
        className={itemSelected.id === item.id ? 'selected' : 'unselected'}
      >
        {item.name}
      </li>
    ))}
  </ul>
};

export default ItemsList;
