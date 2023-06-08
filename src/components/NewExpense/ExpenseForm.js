import "./ExpenseForm.css";
import React, {useState} from 'react';


function ExpenseForm(props){

    const[EnteredTitle,setEnteredTitle]=useState('');
    const[EnteredAmount,setEnteredAmount]=useState('');
    const[EnteredDate,setEnteredDate]=useState('');

    const[estado,setEstado]=useState(0);

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    };

    function amountChangeHandler(event){
        setEnteredAmount(event.target.value);
    }

    
    function dateChangeHandler(event){
        setEnteredDate(event.target.value);
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title: EnteredTitle,
            amount: EnteredAmount,
            date: new Date(EnteredDate)
        };
        
        props.onSaveExpenseData(expenseData); 
        
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
        setEstado(0);
    }

    const mostrarForm=()=>{
        setEstado(1)
        console.log("1");
    }
    const ocultarForm=()=>{
        setEstado(0)
        console.log(0);
    }


    if (estado===1){
        return(<form onSubmit={submitHandler}>
            <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={EnteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' value={EnteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' value={EnteredDate} min="2019-01-01" max="2024-01-01" onChange={dateChangeHandler}></input>
            </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={ocultarForm}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
        }
        else{
            return(<button onClick={mostrarForm}>Add New Expense</button>);
        }
}

export default ExpenseForm;