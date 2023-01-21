import Card from "../UI/Card"
import ExpensesFilter from "./ExpenseFilter"
import "./Expenses.css"
import { useState } from "react"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChar"



const Expenses = (props) => {
    
    const [fitleredYear, setFilteredYear] = useState("2020")

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        
    }

    const filteredYearExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === fitleredYear)

    

    return (
        <Card className="expenses">
            <ExpensesFilter selected={fitleredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredYearExpenses}/>
            <ExpensesList items={filteredYearExpenses}/>
        </Card>
    )
}

export default Expenses