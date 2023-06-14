import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('import.meta.env.VITE_Payment_Gateway_PK');
const Payment = () => {
    return (
        <div>
            <h2 className='text-center text-3xl'>Please Pay</h2>

            <Elements stripe={stripePromise}>
            <CheckOutForm></CheckOutForm>
            </Elements>
           

        </div>
    );
};

export default Payment;