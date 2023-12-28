import React, { useContext, useState  } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {

        const{dispatch} = useContext(AppContext);
        const[selectedCurrency, setselectedCurrency] = useState('');


        const submitEvent = (event) => {
        
            setselectedCurrency(event.target.value); 
            
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency,
        });
        
        }
        return (
            <div className='alert alert-secondary'>
            <div style={{backgroundColor:'lightgreen'}}>
            <label>Currency</label>      
        <select style={{backgroundColor:'lightgreen', borderColor:'lightgreen'}} onMouseDown={event => submitEvent(event)}>
                <option defaultValue value="£" name="£ Pound">£ Pound</option>
                <option value="$" name="$ Dollar">$ Dollar</option>
                <option value="€" name="€ Euro">€ Euro</option>
                <option value="₹" name="₹ Ruppee">₹ Ruppee</option>
            </select>
            </div>
            </div>
    );
};
export default Currency;