import "./Navigation.css";
import CartBtn from "./CartBtn";


const Navigation = (props) => {
  const {cartItems, onAdd } = props;
  const clickHandler = (clicked) => {
    props.onClick(clicked);
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="/">Meals</a>
        </li>
        <li>
          <a href="/">Burgers</a>
        </li>
        <li>
          <a href="/">Others</a>
        </li>
        <li>
          <a href="/">Drinks</a>
        </li>
        <li>
          <CartBtn cartItems={cartItems} onAdd={onAdd} onClick={clickHandler}/>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
