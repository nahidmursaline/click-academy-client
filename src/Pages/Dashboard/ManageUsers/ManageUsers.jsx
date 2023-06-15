import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/users');
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(
      `https://click-academy-server-nahidmursalinee-gmailcom.vercel.app/users/admin/${user._id}`,
      {
        method: 'PATCH',
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(
      `https://click-academy-server-nahidmursalinee-gmailcom.vercel.app/users/instructor/${user._id}`,
      {
        method: 'PATCH',
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
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
              <th className="text-center">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
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
                <td>
                  <div className="flex p-2 items-center justify-center">
                    <div className=" w-full text-center">
                      {user.role === 'admin' ? (
                        'admin'
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="text-white btn btn-ghost bg-red-400 btn-sm mr-4 w-full"
                        >
                          Make Admin
                        </button>
                      )}
                    </div>
                    <div className="w-full text-center">
                      {user.role === 'instructor' ? (
                        'instructor'
                      ) : (
                        <button
                          onClick={() => handleMakeInstructor(user)}
                          className="text-white btn btn-ghost bg-red-400 btn-sm ml-4 w-full"
                        >
                          Make Instructor
                        </button>
                      )}
                    </div>
                  </div>
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
