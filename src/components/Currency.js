import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
    }
    return (

<div className='alert alert-secondary'>
    <span>Currency ({newCurrency})</span>
    <select className="custom-select" id="inputGroupSelect01" onChange={(handleCurrencyChange)}>
        <option value="$" name="Dollar">$ Dollar</option>
        <option value="£" name="Pound">£ Pound</option>
        <option value="€" name="Euro">€ Euro</option>
        <option value="₹" name="Rupee">₹ Rupee</option>
    </select>
</div>
);
};

export default Currency