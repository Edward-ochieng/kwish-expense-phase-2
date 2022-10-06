import React from 'react'

const ExpenseItem = ({ expense }) => {
  return (
    <tr>
        <td>{expense.idNo}</td>
        <td>{expense.name}</td>
        <td>{expense.description}</td>
        <td>Ksh {expense.price}</td>
    </tr>
  )
}

export default ExpenseItem