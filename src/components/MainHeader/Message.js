import "./Message.css";
import { BsEmojiSmile, BsClock } from "react-icons/bs";


const Message = () => {
  return (
      <div className="message-box">
        <div className="content">
        <h2>Delicious Food, Delivered To You</h2>
        <hr></hr>
        <p><b>Choose your favorite dish from our board selection and enjoy a delicious meal at home</b></p>
        <br></br>
        <div className="icons">
        <ul >
            <li><BsEmojiSmile/></li>
            <li className="desc">Very Good, 9.2</li>
            <li className="desc"></li>
            <li><BsClock/></li>
            <li className="desc">12am - 11pm</li>
        </ul>
        </div>
        </div>
      </div>
      
  );
};

export default Message;
