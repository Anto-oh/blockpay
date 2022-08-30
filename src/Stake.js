import React, { Component } from 'react'
import { IconWallet} from '@tabler/icons';
import 'remixicon/fonts/remixicon.css'
import { useState } from "react";
function Stake({balanceS, account}){

return(
<div className='Stake'>
    <div style={{paddingLeft:"10%", width:"80%"}}>
    <div className="avaxBalance">
        <div className='balanceTop'>
    <div className='balanceLeft'>
        <div style={{color:"#949494"}}>Balance</div>
        <div style={{fontWeight:"bold", fontSize:"20px"}}>{balanceS} BPAY</div>
        </div>
        <div className='rightWallet'> <IconWallet
    size={28} // set custom `width` and `height`
    color="grey" // set `stroke` color
    stroke={1}  // set `stroke-width`
    strokeLinejoin="miter" // override other SVG props
  />{account}</div>
    </div>
    </div>

    
    </div>


    <div style={{display:"grid", gridTemplateColumns: "auto auto"}}>
    <div className='stakebox'>
    <p>1 year Stake</p>
    <input className='input' placeholder='0.00'></input>
    <button className='button2'>STAKE</button>
    
   

    </div>
    
    
    <div className='unstakebox'>
    <p>1.5 years Stake</p>
    <input className='input' placeholder='0.00'></input>
    <button className='button3'>STAKE</button>
 

    </div>
    
    </div>
</div>

)
}


export default Stake
