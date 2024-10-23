import { FaPen, FaTrash } from "react-icons/fa";

export default function UserRow({ user, onEdit, onDelete }) {
  return (
    <>
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td className="flex  userBtns">
          <button
            onClick={() => onEdit(user)}
            className="px-0 py-3 text-sm w-[50%] bg-gray-100 text-[#199bcb] font-bold rounded transition duration-300 hover:bg-[#199bcb] hover:text-white flex items-center justify-center"
          >
            <FaPen className="mr-2" />
            Edit User
          </button>
          <button
            onClick={() => onDelete(user)}
            className="px-0 py-3 text-sm w-[50%] bg-gray-100 text-[#199bcb] font-bold rounded transition duration-300 hover:bg-[#199bcb] hover:text-white flex items-center justify-center"
          >
            <FaTrash className="mr-2" />
            Delete User
          </button>
        </td>
      </tr>
    </>
  );
}
