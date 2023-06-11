import React from 'react';
  
import useClasses from '../../../Hooks/useClasses';
import PopularItem from './PopularItem';

const PopularClass = () => {
    const [classes] = useClasses()
    const popular = classes.filter(item => item.category === 'popular');


    return (
        <div>
            <h3>Popular Classes</h3>
           <div className='grid m
        lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-4'>
           {
                popular.map(item=> <PopularItem
                key={item._id}
                item = {item}
                ></PopularItem>)
            }
           </div>
        </div>
    );
};

export default PopularClass;