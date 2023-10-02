import { useState } from "react";
import Card from "../UI/Card";
import'./Expenses.css';
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  // const filteredExpenses = props.item.filter(expe =>{
  //   return expe.date.getFullYear().toString() === filteredYear;
  // });
  const filteredExpenses = props.items.filter(expe => {
    return expe.date.getFullYear().toString() === filteredYear;
  });

  
    return (
        <Card className="expenses">
           <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
           <ExpensesChart expenses={filteredExpenses}/>
           <ExpensesList items={filteredExpenses}/>
        </Card>
      );
}

export default Expenses;