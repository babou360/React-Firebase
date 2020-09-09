import React from 'react'
import {useStateValue} from '../../components/StateProvider';
import './checkout.css';
import CheckoutProduct from '../../components/checkoutProduct/checkoutProduct';
import Subtotal from '../../components/subtotat/subtotal';

function Checkout() {
    const [{basket}]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img  src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" className="checkout__ad"/>
            {basket?.length===0 ?(
                <div>
                    <h2>Your Basket is empty</h2>
                    <p>Your Shopping Cart lives to serve. Give it purpose — fill it with books, CDs, DVDs, toys, electronics, and more.
                     Continue shopping on the Amazon.com homepage, learn about today's deals, or visit your Wish List.</p>
                </div>
            ): <div>
                <h2>Your Basket </h2></div>}
                {basket?.map((item)=>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}/>
                ))} 
            </div>
            {basket?.length>0 && (
                <div className="subtotal__right">
                    <Subtotal/>
                </div>
            )}
        </div>
    )
}

export default Checkout
