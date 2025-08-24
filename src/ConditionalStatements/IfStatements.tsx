import React, { useState } from 'react';

const IfStatements: React.FC = () => {
  const [age, setAge] = useState<number>(0);
  const [actualage, setActualage] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActualage(age);
  };

  if (actualage === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
          <label className="block text-lg font-semibold mb-2">Enter your age:</label>
          <input
            type="number"
            value={age}
            name="age"
            onChange={(e) => setAge(Number(e.target.value))}
            className="w-full p-2 border rounded mb-4"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    );
  } else if (actualage > 18) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-green-100">
        <h1 className="text-2xl font-bold text-green-800">✅ Eligible for voting</h1>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-100">
        <h1 className="text-2xl font-bold text-red-800">❌ Not eligible for voting</h1>
      </div>
    );
  }
};

export default IfStatements;
