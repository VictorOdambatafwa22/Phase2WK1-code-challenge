import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransaction from "./AddTransaction";

function Account() {
  const [transaction, setTransaction] = useState([])
  const [query, setQuery] = useState("")
  useEffect(() => {
    //fetch("http://localhost:8001/transactions?q=" + query)
    fetch("http://localhost:3000/transactions?q=" + query)
      .then((resp) => resp.json())
      .then(transaction => setTransaction(transaction))
  }, [query])
  function handleSearch(e) {
    setQuery(e.target.value)
 }
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransaction />
      <TransactionsList transactions={transaction} />
    </div>
  );
}

export default Account ;