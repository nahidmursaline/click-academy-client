import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const AddClass = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth()
  const onSubmit = data => {
      axios.post('http://localhost:5000/classes',{
        data,
      })
      .then((res) => {
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Class Added successfully',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      .catch((error) => console.log(error))
    };
 

    return (
        <div className='w-full px-10 '>
           <form onSubmit={handleSubmit(onSubmit)}>
           <div className="form-control w-full ">
  <label className="label">
    <span className="label-text font-semibold">Class Name</span>
   
  </label>
  <input type="text" placeholder="Class Name" {...register("name", {required: true, maxLength: 80})} className="input input-bordered w-full " />
  
</div>

<div className="form-control w-full ">
  <label className="label">
    <span className="label-text font-semibold">Instructor Name</span>
   
  </label>
  <input type="text" placeholder="Instructor Name" defaultValue={user?.displayName} {...register("instructor", { required: true })} className="input input-bordered w-full " />
  
</div>

<div className="form-control w-full ">
  <label className="label">
    <span className="label-text font-semibold">Instructor Email</span>
   
  </label>
  <input type="email" placeholder="Instructor Email" defaultValue={user?.email} {...register("email", { required: true })} className="input input-bordered w-full " />
  
</div>
          
           <div className="form-control w-full ">
  <label className="label">
    <span className="label-text font-semibold">Category</span>
   
  </label>
  <input type="text" placeholder="Available Seats" {...register("category", { required: true })} className="input input-bordered w-full " />
  
</div>
           <div className="form-control w-full ">
  <label className="label">
    <span className="label-text font-semibold">Seats Available</span>
   
  </label>
  <input type="text" placeholder="Available Seats" {...register("seats", { required: true })} className="input input-bordered w-full " />
  
</div>
           <div className="form-control w-full ">
  <label className="label">
    <span className="label-text font-semibold">Price</span>
   
  </label>
  <input type="text" placeholder="Price" {...register("price", { required: true })} className="input input-bordered w-full " />
  
</div>
           <div className="form-control w-full ">
  <label className="label">
    <span className="label-text font-semibold">Image URL</span>
   
  </label>
  <input type="text" placeholder="Image URL" {...register("image", { required: true })} className="input input-bordered w-full " />
  
</div>
          <input className='btn btn-error btn-sm mt-4' type="submit" value="Add Class"/>
           </form>
        </div>
    );
};

export default AddClass;