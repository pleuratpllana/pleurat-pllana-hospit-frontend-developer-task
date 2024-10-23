import { FaUserPlus, FaUserEdit } from "react-icons/fa";
import { useState, useEffect } from "react";

function UserForm({ onSubmit, editingUser, isModalOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name || "");
      setEmail(editingUser.email || "");
      setPhone(editingUser.phone || "");
      setSuccessMessage("");
    } else {
      setName("");
      setEmail("");
      setPhone("");
      setSuccessMessage("");
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let hasError = false;

    // Check for empty fields and validate email format
    if (name.trim() === "") {
      setNameError("Name is required.");
      hasError = true;
    }

    if (email.trim() === "") {
      setEmailError("Email is required.");
      hasError = true;
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      hasError = true;
    }

    if (phone.trim() === "") {
      setPhoneError("Phone is required.");
      hasError = true;
    }

    // Stop form submission if there are errors
    if (hasError) return;

    // Use the onSubmit prop to handle both add or update
    onSubmit({
      id: editingUser ? editingUser.id : Date.now(),
      name,
      email,
      phone,
    });

    // Set success message based on whether editing or adding
    setSuccessMessage(
      editingUser ? "User updated successfully!" : "User added successfully!"
    );

    // Clear form fields after submission
    setName("");
    setEmail("");
    setPhone("");

    // Automatically clear the success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  const handleInputChange = (setter, errorSetter) => (e) => {
    setter(e.target.value);
    errorSetter("");
  };

  // Apply red border if there's an error
  const inputClasses = (hasError) =>
    `mt-2 w-full p-4 bg-transparent border ${
      hasError ? "border-red-500" : "border-gray-300"
    } 
    placeholder-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300`;

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
            onChange={handleInputChange(setName, setNameError)}
            placeholder="Enter name"
            className={inputClasses(!!nameError)}
          />
          {nameError && (
            <p className="mt-1 text-red-600 text-opacity-95 text-sm italic font-bold">
              {nameError}
            </p>
          )}
        </div>

        {/* Email Address Input */}
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
            onChange={handleInputChange(setEmail, setEmailError)}
            placeholder="Enter email"
            className={inputClasses(!!emailError)}
          />
          {emailError && (
            <p className="mt-1 text-red-600 text-opacity-95 text-sm italic font-bold">
              {emailError}
            </p>
          )}
        </div>

        {/* Phone Number Input */}
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
            onChange={handleInputChange(setPhone, setPhoneError)}
            placeholder="Enter phone"
            className={inputClasses(!!phoneError)}
          />
          {phoneError && (
            <p className="mt-1 text-red-600 text-opacity-95 text-sm italic font-bold">
              {phoneError}
            </p>
          )}
        </div>

        {/* Submit Form Button*/}
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

      {/* Success Message */}
      {successMessage && (
        <p className="mt-4 text-white text-sm italic">{successMessage}</p>
      )}
    </div>
  );
}

export default UserForm;
