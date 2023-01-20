import React, { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExpense = (props) => {

    const [newForm, setNewForm] = useState(false)

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
       
        props.onAddExpense(expenseData)
        setNewForm(false)
    }

    const openForm = () => {
        setNewForm(true)
        
    }

    const closeForm = () => {
        setNewForm(false)
    }

    let newFeature = <button onClick={openForm} >Add New Expense</button>

    if (newForm) {

        newFeature = <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={closeForm} />
    }
    return (
        <div className="new-expense">
            {newFeature}
        </div>
    )
}

export default NewExpense