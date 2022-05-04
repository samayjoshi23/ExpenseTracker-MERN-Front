import React, { useContext } from 'react';
import { GlobalContext } from './../context/GlobalState'
import Transaction from './Transaction';

const TransactionList = () => {

  const { transactions } = useContext(GlobalContext);

  // transactions.forEach(transaction => {
  //   console.log(transaction.text);
  //   console.log(transaction.amount);
  // });

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (
          <Transaction transaction={transaction} key={transaction.id}></Transaction>
        ))}
      </ul>
    </>
  )
}

export default TransactionList
