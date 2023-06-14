import React from 'react';
import { useQuery } from '@tanstack/react-query'

import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
   const {user, loading} = useAuth();
  //  const token = localStorage.getItem('access-token')
   const [axiosSecure] = useAxiosSecure();

   const { refetch, data: cart = []} = useQuery({
    queryKey: ['cart', user?.email],
    enabled: !loading && !! user?.email && !! localStorage.getItem('access-token'),
    
    // queryFn: async ()=> {
    //     const response = await fetch(`http://localhost:5000/carts?email=${user.email}`, { headers: {
    //       authorization: `bearer ${token}`
    //     }})
    //     return response.json()
    // },
    queryFn: async ()=> {
        const res = await axiosSecure(`/carts?email=${user.email}`)
        return res.data
    },
  })
  return [cart, refetch]
};

export default useCart;