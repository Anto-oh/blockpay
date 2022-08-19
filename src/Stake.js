import React from 'react';
import {  Link } from "react-router-dom";
import avax1 from './avalanche.png'
import { IconWallet} from '@tabler/icons';
import 'remixicon/fonts/remixicon.css'
import { useState } from "react";
const Stake= () =>{

/*const [balance, setBalance] = useState(props.balance)
const [account, setAccount] = useState(props.account)*/
return(
<div className='Stake'>
    <div style={{paddingLeft:"10%", width:"80%"}}>
    <div className="avaxBalance">
        <div className='balanceTop'>
    <div className='balanceLeft'>
        <div style={{color:"#949494"}}>Balance</div>
        <div style={{fontWeight:"bold", fontSize:"20px"}}>0.00 AVAX</div>
        </div>
        <div className='rightWallet'> <IconWallet
    size={28} // set custom `width` and `height`
    color="grey" // set `stroke` color
    stroke={1}  // set `stroke-width`
    strokeLinejoin="miter" // override other SVG props
  />Account</div>
    </div>
    </div>
    <div className="savaxBalance"> 
    <div style={{color:"#949494"}}>Stake Balance</div>
    <div className='right' style={{color:"#949494"}}>Apr</div>
    <div style={{fontWeight:"bold", fontSize:"20px"}}>0.0000 sAVAX</div>
    <div className='right' style={{fontWeight:"bold", fontSize:"20px"}}>~7.20 %</div>
    </div></div>


    <div style={{display:"grid", gridTemplateColumns: "auto auto"}}>
    <div className='stakebox'>
    <p>Stake</p>
    <input className='input' placeholder='0.00'></input>
    <button className='button2'>STAKE</button>
    
    <div style={{display:"flex", justifyContent:"space-between", width:"80%", fontSize:"13px"}}>
    <div>You will receive <i class="ri-question-line"></i></div> <div>~0.00 sAVAX</div></div>
    <div style={{display:"flex", justifyContent:"space-between", width:"80%", fontSize:"13px"}}>
    <div>Exchange rate <i class="ri-question-line"></i></div> <div>1 AVAX ≈ 0.969645 sAVAX</div></div>

    </div>
    
    
    <div className='unstakebox'>
    <p>Unstake</p>
    <input className='input' placeholder='0.00'></input>
    <button className='button3'>UNSTAKE</button>
    
    <div style={{display:"flex", justifyContent:"space-between", width:"80%", fontSize:"13px"}}>
    <div>You will receive <i class="ri-question-line"></i></div> <div>~0.00 sAVAX</div></div>
    <div style={{display:"flex", justifyContent:"space-between", width:"80%", fontSize:"13px"}}>
    <div>Exchange rate <i class="ri-question-line"></i></div> <div>1 AVAX ≈ 0.969645 sAVAX</div></div>

    </div>
    
    </div>
</div>

)
}

export default Stake