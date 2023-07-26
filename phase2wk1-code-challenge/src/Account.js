import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransaction from "./AddTransaction";

function Account() {
  const [transaction, setTransaction] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/transactions?q=" + query)
      .then((resp) => resp.json())
      .then(transaction => setTransaction(transaction))
  }, [query])
  function handleSearch(e) {
    setQuery(e.target.value)
 }


 function handleDeleteClick(id) {
  fetch(`http://localhost:3000/transactions/${id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(() => deleteTransaction(id));
}

 function deleteTransaction(id){
  const trans=transaction.filter((transaction)=> transaction.id!==id)
  setTransaction(trans)
 }

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransaction />
      <TransactionsList transactions={transaction} onDelete={handleDeleteClick}/>
    </div>
  );
}

export default Account ;