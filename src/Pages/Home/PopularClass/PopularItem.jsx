import React from 'react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../../Hooks/useCart';
import { AuthContext } from '../../../Providers/AuthProvider';

const PopularItem = ({ item }) => {

  const { name, instructor, image, seats, price, _id } = item;
  // const {data} = item
  // console.log(item);
  const {user} = useContext(AuthContext);
  const [, refetch] = useCart()
  const navigate = useNavigate();
  const location = useLocation()


  const handleAddToCart = item => {
    console.log(item)
    if(user && user.email){
      const orderItem = {classId: _id, name, instructor, image, seats, price, email: user.email}
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(orderItem)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          refetch()
          Swal.fire({
            title: 'Class Added to Cart',
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp',
            },
          });
        }
      })
    }
    else{
      Swal.fire({
        title: 'Please login to add to cart',
        
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now!'
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login', {state: {from: location}})
        }
      })
    }
  }


  return (
    <div>
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Instructor: {instructor}</p>
    <p>Seats: {seats}</p>
    <p>Price: {price}</p>
    <div className="card-actions justify-end">
      <button onClick={()=> handleAddToCart(item)} className="btn btn-error text-white">Select</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default PopularItem;
