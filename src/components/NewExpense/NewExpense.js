import React, { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExpense = (props) => {

    const [newForm, setNewForm] = useState(false)

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
       
        props.onAddExpense(expenseData)
    }

    const openForm = () => {
        setNewForm(true)
        
    }

    let newFeature = <button onClick={openForm}>Add New Expense</button>

    if (newForm) {

        newFeature = <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
    }
    return (
        <div className="new-expense">
            {newFeature}
        </div>
    )
}

export default NewExpense