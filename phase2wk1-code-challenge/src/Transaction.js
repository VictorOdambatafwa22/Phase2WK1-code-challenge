import React from "react";

function Transaction({date, description, category, amount,onDelete}) {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button onClick={onDelete}>DELETE</button></td>
    </tr>
  );
}

export default Transaction;