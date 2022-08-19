import React, {useState, useEffect} from 'react';
import {  Link } from "react-router-dom";
import logo from './logosbpay/Logotipo_morado.png'
import connectWallet from './connectWallet';
const Navbar= () =>{
  const [walletAddress, setwalletAddress] = useState("Connect Wallet")

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined'){
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts' })


        const abbreviate = (input) => {
          
          return input === "Wallet" ? input : [input.substring(0,6), "...", input.substring(input.length-4, input.length)].join(''); 
      };
      
      const result = abbreviate(accounts[0]);
      
      console.log(result);


        setwalletAddress(result)

        

  }
}








  return (
  <div className="navbar" >
 <a><img src={logo} style={{height:"180px"}}></img></a>
 <a>Stake</a>
 <button className='walletButton' onClick={connectWallet}>{walletAddress}</button>
  </div>
  );
}
export default Navbar;