import { FaUserPlus, FaUserEdit } from "react-icons/fa";
import { useState, useEffect } from "react";

function UserForm({ onSubmit, editingUser, isModalOpen, onSetSuccessMessage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name || "");
      setEmail(editingUser.email || "");
      setPhone(editingUser.phone || "");
    } else {
      setName("");
      setEmail("");
      setPhone("");
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "" || phone.trim() === "") {
      setErrorMessage("All fields are required.");
      return;
    }

    // Use the onSubmit prop to handle both add or update
    onSubmit({
      id: editingUser ? editingUser.id : Date.now(),
      name,
      email,
      phone,
    });

    // Set success message based on whether editing or adding
    onSetSuccessMessage(
      editingUser ? "User updated successfully!" : "User added successfully!"
    );

    // Clear form fields after submission
    setName("");
    setEmail("");
    setPhone("");
    setErrorMessage("");
  };

  const inputClasses = isModalOpen
    ? "mt-2 w-full p-4 bg-transparent border border-white text-[#bbb] placeholder-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-[#199bcb] focus:border-[#199bcb]"
    : "mt-2 w-full p-4 bg-transparent border border-gray-300 text-black-900 placeholder-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300";

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col lg:flex-row lg:items-center lg:gap-6 w-full"
      >
        {/* Name Input */}
        <div className="flex-1">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[#199bcb]"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            className={inputClasses}
          />
          {errorMessage && name.trim() === "" && (
            <p className="mt-1 text-red-600 text-opacity-95 text-sm italic font-bold">
              Name is required.
            </p>
          )}
        </div>

        {/* Email Input */}
        <div className="flex-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#199bcb]"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className={inputClasses}
          />
          {errorMessage && email.trim() === "" && (
            <p className="mt-1 text-red-600 text-opacity-95 text-sm italic font-bold">
              Email is required.
            </p>
          )}
        </div>

        {/* Phone Input */}
        <div className="flex-1">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-[#199bcb]"
          >
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone"
            className={inputClasses}
          />
          {errorMessage && phone.trim() === "" && (
            <p className="mt-1 text-red-600 text-opacity-95 text-sm italic font-bold">
              Phone is required.
            </p>
          )}
        </div>

        {/* Submit Button with Icon */}
        <button
          type="submit"
          className="submitBtn mt-5 lg:mt-0 lg:flex-none py-5 px-6 bg-[#2c90c0] text-white font-bold rounded-md hover:bg-white hover:text-[#2c90c0] transition-colors duration-300 focus:ring-2 focus:ring-[#199bcb] focus:outline-none flex items-center justify-center"
        >
          {editingUser ? (
            <>
              <FaUserEdit className="mr-2" /> Update User
            </>
          ) : (
            <>
              <FaUserPlus className="mr-2" /> Add User
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default UserForm;
