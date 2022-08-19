import React from 'react';
import {  Link } from "react-router-dom";
import avax1 from './avalanche.png'
import { IconWallet} from '@tabler/icons';
import 'remixicon/fonts/remixicon.css'
const Unstake= () =>{


    
return(
<div className='Stake'>
    <div style={{paddingLeft:"10%", width:"80%"}}>
    <div className="avaxBalance">
        <div className='balanceTop'>
    <div className='balanceLeft'>
        <div style={{color:"#949494"}}>Balance</div>
        <div style={{fontWeight:"bold", fontSize:"20px"}}>0.0510 AVAX</div>
        </div>
   
    </div>
    </div>
    <div className="savaxBalance"> 
    <div style={{color:"#949494"}}>Stake Balance</div>
    <div className='right' style={{color:"#949494"}}>Apr</div>
    <div style={{fontWeight:"bold", fontSize:"20px"}}>0.0000 sAVAX</div>
    <div className='right' style={{fontWeight:"bold", fontSize:"20px"}}>~7.20 %</div>
    </div></div>


    
    <div className='stakebox'>
    <p>Stake</p>
    <input className='input'></input>
    <button className='button2'>STAKE</button>
    
    <div style={{display:"flex", justifyContent:"space-between", width:"80%", fontSize:"13px"}}>
    <div>You will receive <i class="ri-question-line"></i></div> <div>~0.00 sAVAX</div></div>
    <div style={{display:"flex", justifyContent:"space-between", width:"80%", fontSize:"13px"}}>
    <div>Exchange rate <i class="ri-question-line"></i></div> <div>1 AVAX ≈ 0.969645 sAVAX</div></div>

    </div>
</div>

)
}

export default Unstake