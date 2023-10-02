import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'
function ExpensesList(props) {
 
    if(props.items.length === 0 ){
        return <h2 className='expenses-list__fallback'>No expenses found</h2>
    }
    return(
    <ul className='expenses-list'>
     { props.items.map((expe) =>(
        <ExpenseItem 
        key={expe.id}
        title={expe.title}
        amount = {expe.amount} 
        date={expe.date}/>))
     }
    </ul>
    )
  
}

export default ExpensesList