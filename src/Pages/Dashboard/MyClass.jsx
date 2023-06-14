import React from 'react';
import { FaAmazonPay, FaPaypal, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../Hooks/useCart';

const MyClass = () => {
    const [cart, refetch] = useCart()

const handleDelete = item => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
         
        fetch(`http://localhost:5000/carts/${item._id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount>0){
                refetch()
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
            }
        })
        }
      })
      
}

    return (
        <div className='w-full'>
            <h2>My Class{cart.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Class Image</th>
        <th>Class Name</th>
        <th>Price</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map((item, index)=>  <tr
        key={item._id}
        >
            <td>
            {index +1 }
            </td>
            <td>
             
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
               
               
              </div>
            </td>
            <td>
             {item.name}
            </td>
            <td>${item.price}</td>
            <td>
              <button onClick={()=>handleDelete(item)} className=" text-white btn btn-ghost bg-red-400 btn-md"><FaTrashAlt></FaTrashAlt></button>
            </td>
            <td>
             <Link to='/dashboard/payment'> <button className="text-white btn btn-ghost bg-orange-400 btn-md">Pay</button></Link>
            </td>
          </tr>)
      }
     
     
     
     
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default MyClass;