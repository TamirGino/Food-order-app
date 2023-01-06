import "./Header.css";
import Message from "./Message";
import Navigation from "./Navigation";
import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';


// import Card from "../UI/Card"; <img className="main-image" src={burgers}></img>

const Header = (props) => {
  const {cartItems, onAdd } = props;
  const ctx =  useContext(AuthContext);

  const clickHandler = (clicked) => {
    props.onClick(clicked);
  };
  return (
    <>
      <div className="navbar">
        <h1>MeatBurger</h1>
        <Navigation cartItems={cartItems} onAdd={onAdd} onClick={clickHandler} />
        
      </div>
      <div className="cover-image"></div>
      <br />
      <br />
      {ctx.delay && <Message />}
    </>
  );
};

export default Header;
