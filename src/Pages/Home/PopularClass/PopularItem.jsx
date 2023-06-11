import React from 'react';

const PopularItem = ({ item }) => {
  const { name, instructor, image, seats, price } = item;
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
      <button className="btn btn-primary">Select</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default PopularItem;
