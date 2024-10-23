import { useEffect, useRef } from "react";

export default function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null); // Create a ref for the modal content

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Handle clicks outside the modal content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Move focus to modal when opened
      modalRef.current?.focus();
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center"
      aria-hidden="true" // Screen readers ignore the backdrop
      style={{ zIndex: 1000 }}
    >
      <div
        ref={modalRef}
        aria-modal="true" // Defines the modal as a dialog
        role="dialog" // Accessible role for screen readers
        tabIndex="-1" // Ensure modal is focusable
        className="bg-white/25 border border-white p-8 rounded shadow-lg relative backdrop-blur-md"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close" // Accessibility improvement
          className="absolute top-0 right-0 mt-2 mr-3 text-4xl font-bold text-white-700 hover:text-[#3a90c0] transition-colors duration-300"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
