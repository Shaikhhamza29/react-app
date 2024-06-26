import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({ transaction }) => {

    const {deletetransaction} = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={()=> deletetransaction(transaction.id)} class="delete-btn">x</button>
        </li>
    )
}

export default Transaction
