
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";
import Card from "../UI/Card"
import React, {useState} from 'react';


function Expenses(prop){
    const[filteredYear,setFilteredYear]=useState('2020');
    // const [expense,setExpenses]=useState(prop.todo);

    const filterChangeHandler=(selectedYear)=>{
        console.log(selectedYear)
        setFilteredYear(selectedYear)

        // const a=prop.todo.filter( expense => {return expense.date.getFullYear().toString() === selectedYear});
        // console.log(a);
        // setExpenses((prev)=>{
        //     return [expense];
        // });
    }; 

    const filteredExpenses=prop.todo.filter(expense=>{
        return expense.date.getFullYear().toString() === filteredYear
    })


    


    return (
        <div>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
        </Card>
        </div>
    );
}
    
export default Expenses;