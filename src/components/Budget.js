import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, remaining } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState('');

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        return;
    }

    if(newBudget > 20000) {
        alert("The value cannot exceed remaining funds "+remaining);
    }

    return (

        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>``
            <span>newBudget: {newBudget}</span>
            <span>remaining: {remaining}</span>
            <span>budget: {budget}</span>
            <input type="number" step="9" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;