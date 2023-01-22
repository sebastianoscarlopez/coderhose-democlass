import './styles.css'

const ItemSelected = ({ itemSelected, selectedColor }) => (
  <div className="item-selected">
    <h2>{itemSelected.name}</h2>
    <p>{itemSelected.description}</p>
    <img
      src={itemSelected.image}
      alt={itemSelected.name}
      className={`color_${selectedColor}`}
    />
  </div>
);

export default ItemSelected;
