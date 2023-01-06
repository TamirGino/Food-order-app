import "./Item.css";
// import Card from "../UI/Card";
import Amount from './Amount';



function Item(props) {
  const amountHandler = (amount) => {
    props.onAmount(amount);
    
  };
  const onAdd = (item) => {
    // console.log(item);
    props.onAdd(item);
  };

  return (
    <>
      <div className="menu-item">
        <div>
        <h4>{props.title}</h4>
        <div className="menu-item__description">
          <p>{props.description}</p>
        </div>
        <div className="menu-item__price">
          <p>${props.price.toFixed(2)}</p>
        </div>
        </div>
        <Amount  item={props.item} onChangeAmount={amountHandler} onAdd={onAdd} />
      </div>
      <hr></hr>

    </>
  );
}

export default Item;
