import Card from "../UI/Card"
import ExpensesFilter from "./ExpenseFilter"
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
import { useState } from "react"



const Expenses = (props) => {
    
    const [fitleredYear, setFilteredYear] = useState("2020")

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        
    }

    const filteredYearExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === fitleredYear)
    let expenseOutput = <p>No Expense Found</p>

    if (filteredYearExpenses.length > 0) {
        expenseOutput = filteredYearExpenses
        .map(expense => 
        <ExpenseItem 
        key = {expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date} />)  
    }
    

    return (
        <Card className="expenses">
            <ExpensesFilter selected={fitleredYear} onChangeFilter={filterChangeHandler} />
            {expenseOutput}  
        </Card>
    )
}

export default Expenses