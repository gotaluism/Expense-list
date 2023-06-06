import "./ExpenseDate.css";

function ExpenseDate(props){

    const mes = props.fechita.toLocaleString('en-US',{month: 'long'});
    const dia = props.fechita.toLocaleString('en-US',{day: '2-digit'});
    const año= props.fechita.getFullYear();   

    return(            
    <div className="expense-date">
        <div className="expende-date__month">{mes}</div>
        <div className="expende-date__year">{año}</div>
        <div className="expende-date__day">{dia}</div>
    </div>
    );
}

export default ExpenseDate;