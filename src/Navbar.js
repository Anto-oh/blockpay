import React, {useState, useEffect} from 'react';
import {  Link } from "react-router-dom";
import logo from './logosbpay/Logotipo_morado.png'
import connectWallet from './connectWallet';
const Navbar= ({func, address}) =>{

  return (
  <div className="navbar" >
 <a><img src={logo} style={{height:"180px"}}></img></a>
 <a>Stake</a>
 <button className='walletButton' onClick={()=> {
  func()}}>{address}</button>
  </div>
  );
}
export default Navbar;
