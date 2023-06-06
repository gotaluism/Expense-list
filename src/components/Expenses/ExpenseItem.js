import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";





function ExpenseItem(props){

    return (
        <Card className="expense-item">
            <ExpenseDate fechita={props.fecha}> </ExpenseDate>
            <div className="expense-item__description">
                <h2 >{props.descripcion}</h2>
                <div className="expense-item__price">${props.precio}</div>
            </div>
        </Card> 
    );
}

export default ExpenseItem;