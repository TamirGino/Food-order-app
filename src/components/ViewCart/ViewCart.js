import "./ViewCart.css";
import Card from "../UI/Card";
// import CartItem from "./CartItem";
import React, { useState } from "react";

const ViewCart = (props) => {
  const { cartItems, onAdd, onRemove, enteredAmount } = props;
  console.log(cartItems);
  const [flag, setFlag] = useState(true);
  const totalPrice = cartItems.reduce(
    (a, current) => a + current.price * current.qty,
    0
  );

  if (props.enteredAmount === "0") {
    return (
      <div className="backdrop">
        <div className="zero-items">
          <div>
            <h2>Empty Cart</h2>
          </div>
          <h4>Your cart has no items</h4>
          <div className=".zero-items">
            <button onClick={props.onError}>Okay</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="backdrop">
        <Card className="main-cart">
          <ul className="cart-list">
            {cartItems.map((item) => (
              <>
                <div key={item.id}>
                  <div>
                    <h4>{item.title}</h4>
                  </div>
                </div>
                <div className="cart-item__price">
                  $ {item.price.toFixed(2)}
                  <div className="cart-item__qty">
                    <h5>x{item.qty} </h5>
                  </div>
                </div>

                <div className="cart-btns">
                  <button className="button-plus" onClick={() => onAdd(item)}>
                    <strong>+</strong>
                  </button>
                  <button
                    className="button-minus"
                    onClick={() => onRemove(item)}
                  >
                    <strong>-</strong>
                  </button>
                </div>
                <hr></hr>
              </>
            ))}
          </ul>

          {cartItems.length !== 0 && (
            <>
              <h3>Total Amount</h3>
              <div className="total-amount">
                <strong>$ {totalPrice.toFixed(2)}</strong>
              </div>

              <div className="cart-order-btns">
                  <button className="cart-close" onClick={props.onError}>
                    Close
                  </button>
                  <button
                    className="cart-order"
                  >
                    Order
                  </button>
                </div>
            </>
          )}
        </Card>
      </div>
    );
  }
};

export default ViewCart;
