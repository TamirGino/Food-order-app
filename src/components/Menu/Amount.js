import { useState } from "react";
import "./Amount.css";

// const itemReducer = (state, action) => {
//   if (action.type === 'USER_ORDER'){
//     // console.log(action.title_val);
//     return { title: action.title_val, price:action.price_val };
//   }
//   return { title: '', price: '' };
// };

const Amount = (props) => {
  const [enteredAmount, setEnteredAmount] = useState("1");
  const {item} = props;
  // console.log(item);
  // const [itemState, dispatchItem] = useReducer(itemReducer, {
  //   price: '',
  //   title: '',
  // });

  const inputHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const updateAmount = () => {
    props.onChangeAmount(enteredAmount);
    console.log(enteredAmount);
  };

    const onAdd = (item) => {
      // console.log("AMOUNT");
      console.log(enteredAmount);
      // props.onChangeAmount(enteredAmount);
      props.onAdd(item);
      updateAmount()
    };
  



  
  
  return (
    <>
      <div className="main-amount">
        <button onClick={() => onAdd(item)} >+ Add</button>
      </div>
    </>
  );
};

export default Amount;
