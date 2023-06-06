import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card"
import React, {useState} from 'react';


function Expenses(prop){
    const[filteredYear,setFilteredYear]=useState('2020');

    const filterChangeHandler=(selectedYear)=>{
        console.log(selectedYear)
        setFilteredYear(selectedYear)
    }; 

    


    return (
        <div>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
        <ExpenseItem fecha= {prop.todo[0].date} descripcion={prop.todo[0].title} precio={prop.todo[0].amount}></ExpenseItem>
        <ExpenseItem fecha= {prop.todo[1].date} descripcion={prop.todo[1].title} precio={prop.todo[1].amount}></ExpenseItem>
        <ExpenseItem fecha= {prop.todo[2].date} descripcion={prop.todo[2].title} precio={prop.todo[2].amount}></ExpenseItem>
        </Card>
        </div>
    );
}
    
export default Expenses;