import React from 'react';
import Banner from '../Banner/Banner';
import Instructor from '../Instructor/Instructor';
import Interesting from '../Interesting/Interesting';
import PopularClass from '../PopularClass/PopularClass';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularClass></PopularClass>
           <Instructor></Instructor>
           <Interesting></Interesting>
        </div>
    );
};

export default Home;