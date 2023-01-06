import "./CartItem.css";
// import Card from "../UI/Card";
import AuthContext from '../../store/auth-context';
import React, { useContext } from 'react';



function CartItem(props) {
const ctx =  useContext(AuthContext);
console.log(ctx.cart.title);
  return (
    <>
    <h4>{props.title}</h4>
      <div className="menu-item">
        <div>
        <h4>{ctx.cart.title}</h4>
        <div className="menu-item__description">
        </div>
        <div className="menu-item__price">
          <p>${ctx.cart.price}description</p>
        </div>
        </div>
      </div>
      <hr></hr>

    </>
  );
}

export default CartItem;
