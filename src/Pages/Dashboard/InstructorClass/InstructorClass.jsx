import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import InstructorClasssItem from './InstructorClasssItem';

const InstructorClass = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://click-academy-server-nahidmursalinee-gmailcom.vercel.app/myclass'
      )
      .then((res) => {
        setClasses(res.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      <h2 className="text-center text-3xl m-6">
        Instructor Class : {classes.length}
      </h2>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 ">
        {classes.map((cls) => (
          <InstructorClasssItem key={cls._id} cls={cls}></InstructorClasssItem>
        ))}
      </div>
    </div>
  );
};

export default InstructorClass;
