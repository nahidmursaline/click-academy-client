import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useAuth from '../Hooks/useAuth';
import useInstructor from '../Hooks/useInstructor';


const InstructorRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor()
    const location = useLocation()
    if(loading || isInstructorLoading){
      return  <progress class="progress w-56"></progress>
    }


    if(user && isInstructor){
        return children;
    }
    else
    return <Navigate to="/login" state={{from: location }}replace></Navigate>
    
};

export default InstructorRoute;