import React, { useState } from 'react';

const Ternary: React.FC = () => {
  const [age, setAge] = useState(17);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <p className="text-xl font-medium mb-4 text-gray-800">
        {age >= 18 ? '✅ You are an adult.' : '🔒 You are underage.'}
      </p>
      <p className="mb-2 text-gray-600">Current Age: <span className="font-bold">{age}</span></p>
      <button
        onClick={() => setAge(age + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Increase Age
      </button>
    </div>
  );
};

export default Ternary;
