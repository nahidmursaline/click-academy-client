import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../src/assets/notFound.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='mx-auto my-20' src={img} alt="" />
            <Link to='/'><button className='btn btn-error my-20 px-64 mx-80'>Back To Home</button></Link> 
        </div>
    );
};

export default NotFound;