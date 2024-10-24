"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { fetchUsers } from "./apiservices/api";
import logo from "./assets/hospitlogo.png";
import Modal from "./components/modal";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch {
        setApiError(
          "Unable to fetch users at the moment. Please try again later."
        );
      }
    };

    loadUsers();
  }, []);

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [newUser, ...prevUsers]);
  };

  const handleUpdateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setEditingUser(null);
    setIsModalOpen(false);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleDeleteUser = (user) => {
    setUserToDelete(user);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (userToDelete) {
      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.id !== userToDelete.id)
      );
      setIsDeleteModalOpen(false);
      setUserToDelete(null);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setUserToDelete(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-11/12 ">
        <div className="flex flex-col justify-center items-center mb-2">
          <Image src={logo} alt="Logo" priority={true} />
          <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-center">
            Hospit User Management
          </h1>
          <p className="mt-3 text-center text-base sm:text-lg md:text-xl font-light">
            Try to add, edit, or delete an existing user from the table. Ensure
            all data is provided correctly.
          </p>
        </div>

        <UserForm
          onSubmit={editingUser ? handleUpdateUser : handleAddUser}
          editingUser={editingUser}
        />

        {apiError && (
          <p className="text-red-400 text-center mb-4">{apiError}</p>
        )}

        <UserList
          users={users}
          onEdit={handleEditUser}
          onDelete={handleDeleteUser}
        />

        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <UserForm onSubmit={handleUpdateUser} editingUser={editingUser} />
        </Modal>

        <Modal isOpen={isDeleteModalOpen} onClose={handleCloseDeleteModal}>
          <div>
            <h2 className="text-lg font-semibold">
              Are you sure you want to delete this user?
            </h2>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center">
              <button
                onClick={handleCloseDeleteModal}
                className="mr-0 sm:mr-4 mb-4 sm:mb-0 px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 text-[#2c90c0]"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-3 py-2 bg-[#2c90c0] text-white rounded hover:bg-[#0c90c0]"
              >
                Delete
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
