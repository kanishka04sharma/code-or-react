import { useEffect, useState } from "react";
import { CDN_Url } from "../utils/Common";

const Header = () => {
  const [BtnStatus, setBtnStatus] = useState("login");

  useEffect(()=>{
        console.log("use eff of react");
  },[]);
  console.log("header");
  return (
    <div className='header'>
      <div className='logo'>
        <h2>Restraunt</h2>
      </div>
      <div className='Nav-list'>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
          <li>cart</li>
          <button>Login</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
