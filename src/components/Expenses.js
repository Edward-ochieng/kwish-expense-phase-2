import React from 'react'
import { Table } from 'react-bootstrap'
import CenterDiv from './CenterDiv'
import ExpenseItem from './ExpenseItem'

const Expenses = ({ expenses }) => {
  return (
    <div className='expenses-container'>
        <h1>kwish Expenses</h1>
        {expenses.length === 0 && <CenterDiv><p>No Expenses yet</p></CenterDiv>}
        {expenses.length > 0 && <Table striped bordered hover variant='dark'>
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => <ExpenseItem key={expense.idNo} expense={expense} ></ExpenseItem>)}
            </tbody>
        </Table>}
    </div>
  )
}

export default Expenses