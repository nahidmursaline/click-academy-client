import React from 'react';
import useClasses from '../../Hooks/useClasses';
import PopularItem from '../Home/PopularClass/PopularItem';

const Classes = () => {
    const [classes] = useClasses()
    return (
        <div>
            <h3>All Classes</h3>
           <div className='grid m
        lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-4'>
           {
                classes.map(item=> <PopularItem
                key={item._id}
                item = {item}
                ></PopularItem>)
            }
           </div>
        </div>
    );
};

export default Classes;