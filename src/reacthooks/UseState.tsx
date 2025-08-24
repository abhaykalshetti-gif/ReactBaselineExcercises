import React, { useState } from 'react';

const UseState: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const [name, setName] = useState<string>('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">React TypeScript useState Example</h1>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Enter your name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Your name"
        />
        {name && <p className="mt-2 text-green-600">Hello, {name}!</p>}
      </div>

      <div className="mt-6">
        <p className="text-xl mb-4">Count: <span className="font-semibold text-indigo-600">{count}</span></p>
        <div className="space-x-4">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseState;
