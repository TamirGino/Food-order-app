import React, { useState, useEffect } from "react";
import Header from "./components/MainHeader/Header";
import Menu from "./components/Menu/Menu";
import AuthContext from "./store/auth-context";
import Data from "./store/data";
import ViewCart from "./components/ViewCart/ViewCart";
import DeliveryMan from "./components/DeliveryMan/DeliveryMan";

const CART = [
  {
    title: "",
    price: "",
    amount: "",
  },
];

// const MENU = [
//   {
//     id: "Meals_1",
//     title: "MeatBurger 1",
//     description: "Burger meal with fries and a soft drink",
//     price: 15,
//   },
//   {
//     id: "Meals_2",
//     title: "MeatBurger 2",
//     description: "Double-burger meal with fries and a soft drink",
//     price: 22,
//   },
//   {
//     id: "Meals_3",
//     title: "MeatBurger 1 + Beer",
//     description: "Burger meal with fries and a beer",
//     price: 18,
//   },
//   {
//     id: "Meals_4",
//     title: "MeatBurger 2 + Beer",
//     description: "Double-burger meal with fries and a beer",
//     price: 25,
//   },
// ];

function App() {


  const { menu } = Data;
  const [enteredAmount, setEnteredAmount] = useState("0");
  const [itemAmount, setItemAmount] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [btnFlash, setBtnFlash] = useState(false);
  const [delay, setDelay] = useState(false);

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
      setEnteredAmount(parseInt(enteredAmount) - parseInt("1"));
      handleBtnFlash();
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
      setEnteredAmount(parseInt(enteredAmount) - parseInt("1"));
      handleBtnFlash();
    }
  };

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      // exist
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      // first time to add
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      console.log(cartItems);
      console.log("OUTSIDE");
    }
    setEnteredAmount(parseInt(enteredAmount) + parseInt("1"));
    handleBtnFlash();
  };

  const amountHandler = (amount) => {
    console.log("amount");
    setItemAmount(amount);
    setEnteredAmount(parseInt(enteredAmount) + parseInt(amount));
    handleBtnFlash();
  };

  const clickHandler = (clicked) => {
    setIsClicked(clicked);
  };

  const handleError = () => {
    setIsClicked(false);
  };

  const handleBtnFlash = () => {
    setBtnFlash(true);
    setTimeout(() => {
      setBtnFlash(false);
    }, 1500);
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setDelay(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        delay: delay,
        flash: btnFlash,
        enteredAmount: enteredAmount,
        menu: menu,
        cart: CART,
      }}
    >
      <DeliveryMan/>
      {isClicked && (
        <ViewCart
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          enteredAmount={enteredAmount}
          onError={handleError}
        />
      )}
      <Header onAdd={onAdd} onClick={clickHandler} />
      {delay && <Menu onAdd={onAdd} items={menu} onAmount={amountHandler} />}
    </AuthContext.Provider>
  );
}

export default App;
