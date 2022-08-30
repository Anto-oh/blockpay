import React, {useEffect, useState, Component} from 'react';
import Stake from './Stake'
import Web3 from 'web3'
import * as ReactDOM from 'react-dom/client';
import { render } from 'react-dom';

function Main({func, balanceInfo, address}){
  
    const [showButton, setShowButton] = useState(true)
  
    
    
    let  handleHide = () => {
        setShowButton(false);
      };

    
    
return(
    <>
<div className='Main'>
<h1>Liquid Staking</h1>
<h4>Stake AVAX and receive sAVAX while staking</h4>

<div className="button1"> </div>
<Stake balanceS={balanceInfo} account={address}/>

{showButton? <button className='butcon' onClick={()=> {
  func()
  setShowButton(false)
 }}>Connect Wallet</button> : null }

</div>

<table align="center">
    <tr>
        <th>Initial date</th>
        <th>Staked</th>
        <th>Staking period</th>
        <th>End date</th>
        <th>Earned (+initial)</th>
    </tr>

    <tr>
        <td>10/10/22</td>
        <td>5,029 BPAY</td>
        <td>1 year (30% ROI)</td>
        <td>10/10/23</td>
        <td>6,537.7 BPAY</td>
    </tr>

    <tr>
        <td>11/10/22</td>
        <td>13,000 BPAY</td>
        <td>1.5 years (50% ROI)</td>
        <td>11/04/24</td>
        <td>19,500 BPAY</td>
    </tr>

    <tr>
        <td>15/10/22</td>
        <td>1,000 BPAY</td>
        <td>1 year (30% ROI)</td>
        <td>15/10/23</td>
        <td>1,300 BPAY</td>
    </tr>

</table>


</>
)
}
export default Main
