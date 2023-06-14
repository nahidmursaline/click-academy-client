import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const AddClass = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const {user} = useAuth()
//   const onSubmit = data => {
//     const name = instructorName.current.value;
//     const email = instructorEmail.current.value;

//     const classData = {...data, name, email}
    
//     console.log(classData)};
//   console.log(errors);

    return (
        <div className='w-full px-10 '>
           {/* <form onSubmit={handleSubmit(onSubmit)}>
           <div className="form-control w-full ">
  <label className="label">
    <span className="label-text font-semibold">Class Name</span>
   
  </label>
  <input type="text" placeholder="Class Name" {...register("name", {required: true, maxLength: 80})} className="input input-bordered w-full " />
  
</div>
           <div className="form-control w-full ">
  <label className="label">
    <span className="label-text font-semibold">Instructor</span>
   
  </label>
  <input   value={user?.displayName} className="input input-bordered w-full " readOnly ref={instructorName}/>
  
</div>
           <div className="form-control w-full ">
  <label className="label">
    <span className="label-text font-semibold">Instructor Email</span>
   
  </label>
  <input   value={user?.email} className="input input-bordered w-full " readOnly ref={instructorEmail}/>
  
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
           </form> */}
        </div>
    );
};

export default AddClass;