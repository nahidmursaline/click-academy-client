import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Instructor = () => {
  const { refetch, data: instructors = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch(
        `https://click-academy-server-nahidmursalinee-gmailcom.vercel.app/users/instructor`
      );
      return res.json();
    },
  });
  return (
    <div>
      <h2 className="text-center text-3xl m-6 pt-[70px]">
        Popular Instructors
      </h2>
      <div className="w-full">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {instructors.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.photo} alt="Not Available" />
                      </div>
                    </div>
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
