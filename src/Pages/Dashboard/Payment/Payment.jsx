import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import useCart from '../../../Hooks/useCart';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [cart] = useCart()
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h2 className='text-center text-3xl mb-6 p-4'>Please Insert Your Card and Pay</h2>

            <Elements stripe={stripePromise}>
            <CheckOutForm cart={cart} price={price}></CheckOutForm>
            </Elements>
           

        </div>
    );
};

export default Payment;