import React, { useRef } from 'react';

const Refs: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded shadow-md flex flex-col space-y-4">
      <input
        type="text"
        ref={inputRef}
        placeholder="Type here..."
        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={focusInput}
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Focus Input
      </button>
    </div>
  );
};

export default Refs;
