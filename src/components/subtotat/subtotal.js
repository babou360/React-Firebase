import React from 'react';
import './subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from '../../components/StateProvider';
import {getbasketTotal} from '../reducer';

function Subtotal(){
const [{basket}]=useStateValue();
return <div className="subtotal">
    <div className="subtotal__fields">
    <h4>Subtotal</h4>
    <p>({basket.length}: items)</p>
    <p>{getbasketTotal(basket)}</p>
    <p>TZS</p>
    </div>
    <small>
        <input type="checkbox"/> This Order contains a gift
    </small>
    <button>Proceed to CheckOut</button>
</div>
}
export default Subtotal;