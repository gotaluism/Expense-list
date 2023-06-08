import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"

const ExpensesList=(props)=>{
    if (props.items.length=== 0) {
        return <h2 className="expenses-list__fallback">No expenses found</h2>
    }
    else{

    return (<ul className='expenses-list'>
        {(props.items.map((expense)=> (<ExpenseItem key={expense.id} fecha= {expense.date} descripcion={expense.title} precio={expense.amount} />)))}
    </ul>)}
}


export default ExpensesList 