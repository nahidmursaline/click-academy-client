import React from 'react';
import Banner from '../Banner/Banner';
import Instructor from '../Instructor/Instructor';
import PopularClass from '../PopularClass/PopularClass';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularClass></PopularClass>
           <Instructor></Instructor>
        </div>
    );
};

export default Home;