import "./Menu.css";
import Card from "../UI/Card";
import Item from "./Item";
import React, { useState } from "react";


const Menu = (props) => {


  const amountHandler = (amount) => {
    props.onAmount(amount);
  };

  const onAdd = (item) => {
    console.log(item);
    props.onAdd(item);
  };


  return (
    <Card className="main-menu">
        <div className="main">
      <ul className="menu-list">
      {props.items.map((item) => (
          <Item onAmount={amountHandler} onAdd={onAdd}
            item={item}
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
          />
          ))}
      </ul>
      </div>
    </Card>
  );
};
export default Menu;
