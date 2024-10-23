import { useState } from "react";
import UserRow from "./UserRow";

export default function UserList({ users, onEdit, onDelete }) {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="overflow-x-auto pb-4">
      {" "}
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-white/20 ">
          <tr>
            <th className="px-4 py-2 text-left border">Name:</th>
            <th className="px-4 py-2 text-left border">Email Address:</th>
            <th className="px-4 py-2 text-left border">Phone Number:</th>
            <th className="px-4 py-2 text-left border">Manage User Data</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 text-[#2c90c0] font-bold bg-gray-100 rounded hover:bg-gray-300 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>

        <span className="text-white-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-[#2c90c0] font-bold bg-gray-100 rounded hover:bg-gray-300 ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
