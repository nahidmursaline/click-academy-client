import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    signIn(data.email, data.password).then((result) => {
      const user = result.user;
    });

    Swal.fire({
      title: 'Log In Successful',
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    });
    navigate(from, { replace: true });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content w-1/2 ">
          <div className="card flex-shrink-2 w-full max-w-sm shadow-2xl bg-base-100 ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <h1 className="text-3xl text-center font-bold">Login Now!</h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register('email', { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register('password', {
                    required: true,
                    maxLength: 15,
                    minLength: 6,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {errors.password && <span>This field is required</span>}
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
                  value="Login"
                ></input>
                <br />
                <button className="btn btn-error">Google Login</button>
              </div>

              <p className="text-center my-4">
                New to Click Academy?{' '}
                <Link className=" text-red-600 " to="/signup">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
