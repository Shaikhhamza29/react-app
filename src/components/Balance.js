import React,{useContext} from 'react'

import { GlobalContext } from '../context/GlobalState'

const Balance = () => {


  const {transaction} = useContext(GlobalContext);

  const amount = transaction.map(transaction => transaction.amount);
  const total = amount.reduce((acc,item)=> (acc+=item),0).toFixed(2);
  return (
    <div>
      <h4> Your Balance </h4>
      <h1 id='balance'>${total}</h1>
    </div>
  )
}

export default Balance
