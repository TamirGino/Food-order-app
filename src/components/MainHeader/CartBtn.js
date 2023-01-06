import "./CartBtn.css";
import React, { useContext } from 'react';
import { BsCart3 } from "react-icons/bs";
import AuthContext from '../../store/auth-context';



const CartBtn = (props) => {
  const ctx =  useContext(AuthContext);
  console.log(ctx.flash);
  
  // const handleError = (bool) => {
  //   setIsClicked(bool.altKey);
  // }; <div className={isActive ? 'cart-btn': 'cart-btn-animation'}>

  const clickHandler = () => {
    props.onClick(true);
  };

  return (
    <>
    
      <div className= 'cart-btn'>
        <button onClick={clickHandler} >
          <BsCart3 /> Your Cart
          <div className={ctx.flash ? 'cart-update-animation': 'cart-update'}>{ctx.enteredAmount}</div>
        </button>
      </div>
      
      
    </>
  );
};

export default CartBtn;
