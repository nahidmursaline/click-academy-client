
import { CardElement, CartElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const CheckOutForm = ({cart,price}) => {
    const stripe = useStripe()
    const elements = useElements();
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, seClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const navigate = useNavigate()




  useEffect( () => {
   if(price > 0){
    axiosSecure.post('/create-payment-intent', {price})
    .then(res => {
      console.log(res.data.clientSecret)
      seClientSecret(res.data.clientSecret)
    })
   }
  }, [price, axiosSecure])





    const handleSubmit = async(event) => {
        event.preventDefault()
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement);
        if(card === null){
            return
        }
        const {error, paymentMethod} =await stripe.createPaymentMethod({
          type: 'card',
          card
        })
        if(error){
          console.log('error', error)
        }
        else{
          console.log('payment method', paymentMethod)
        }
        setProcessing(true)

        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(clientSecret,{
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || 'anonymous',
              name: user?.displayName || 'anonymous',
            }
          }
        })

        if(confirmError){
          console.log(confirmError)
        }
        console.log(paymentIntent)
        setProcessing(false)
        if(paymentIntent.status === 'succeeded'){
          setTransactionId(paymentIntent.id)
          const payment = {
            email: user?.email, transactionId: paymentIntent.id,price, quantity: cart.length,
            cartItems: cart.map(item =>item._id),
            classItems: cart.map(item => item.classId) ,
            status: 'service pending',
            itemsName: cart.map(item => item.name)
          }
          axiosSecure.post('/payments', payment)
          .then(res => {
            if(res.data.insertResult.insertedId){
              navigate('/dashboard/myclass')
            }
          })
          
        }
    }
    return (
       <>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-error btn-sm mt-6' type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
    {transactionId && <p>Transaction complete with transactionId: {transactionId}</p>}
       </>
    
    );
};

export default CheckOutForm;