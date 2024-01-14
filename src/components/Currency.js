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
            <div class="">
                <span>Currency ({newCurrency})</span>
                <div class="dropdown-options" name="currency" onChange={handleCurrencyChange}>
                    <select>
                    <option>$ Dollar</option>
                    <option>£ Pound</option>
                    <option>€ Euro</option>
                    <option>₹ Rupee</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Currency