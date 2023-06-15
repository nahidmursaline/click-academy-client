import React from 'react';

const InstructorClasssItem = ({cls}) => {
    const {_id, data} = cls
    
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={data.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.name}</h2>
        <p>Instructor: {data.instructor}</p>
        <p>Email: {data.email}</p>
        <p>Category: {data.category}</p>
        <p>Seats: {data.seats}</p>
        <p>Price: {data.price}</p>
        <p>status: approved</p>
        <div className="card-actions justify-end">
          <div>
          <button className="btn btn-error ">Enrolled Student</button>
          <button className="btn btn-error ml-5">Feedback</button>
          <button className="btn btn-error mt-2 ">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorClasssItem;
