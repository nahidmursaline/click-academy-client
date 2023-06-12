import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const {createUser, updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser)
      updateUserProfile(data.name, data.photo)
      
      .then(()=> {
        const saveUser = {name: data.name, email: data.email, photo: data.photo}
        fetch('http://localhost:5000/users', {
          method: 'POST', 
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            reset();
            Swal.fire({
              title: 'SignUp Successful',
              showClass: {
                popup: 'animate__animated animate__fadeInDown',
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp',
              },
            });
            navigate('/')
          }
        })
        console.log('user profile updated');
       
      })
      .catch(error => console.log(error))
    })
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content w-1/2 ">
          <div className="card flex-shrink-2 w-full max-w-sm shadow-2xl bg-base-100 ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <h1 className="text-3xl text-center font-bold">Sign Up Now!</h1>
             
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", {required: true })}
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    
                   
                  />
                   {errors.name && <span className='text-red-500'>Name is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    
                    {...register("email", {required: true })}
                    placeholder="email"
                    className="input input-bordered"
                    
                  />
                  {errors.email && <span className='text-red-500' >Email is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    {...register("password", {required: true, maxLength: 15, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ })}
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  {errors.password?.type === 'required' && <p className='text-red-500' role="alert">Password is required</p>}
                  {errors.password?.type === 'minLength' && <p className='text-red-500' role="alert">Password must be 6 characters</p>}
                  {errors.password?.type === 'pattern' && <p className='text-red-500' role="alert">Password must have one uppercase and special characters</p>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    {...register("confirmPassword",{required: true, maxLength: 15, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ })}
                    placeholder="Comfirm Password"
                    className="input input-bordered"
                    required
                  />
                     {errors.password?.type === 'required' && <p className='text-red-500' role="alert">Password is required</p>}
                  {errors.password?.type === 'minLength' && <p className='text-red-500' role="alert">Password must be 6 characters</p>}
                  {errors.password?.type === 'pattern' && <p className='text-red-500' role="alert">Password must have one uppercase and special characters</p>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    {...register("photo", {required: true })}
                    placeholder="Photo URL"
                    className="input input-bordered"
                    required
                  />
                   {errors.photo && <span className='text-red-500'>Photo URL is required</span>}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-error"
                    type="submit"
                    value="Sign Up"
                  ></input>
                </div>
                <p className="text-red-500 mt-4"></p>
              
              <p className="text-center my-4">
                Already Have an Account?{' '}
                <Link className=" text-red-600 " to="/login">
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
