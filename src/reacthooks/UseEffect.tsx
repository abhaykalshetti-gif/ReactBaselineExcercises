import React, { useState, useEffect } from 'react';

const UseEffect: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(`Count changed to: ${count}`);
    return () => {
      console.log(`Cleaning up... Last count was: ${count}`);
    };
  }, [count]);

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded shadow-md text-center">
      <h2 className="text-3xl font-bold mb-6">Counter: {count}</h2>
      <h2>Check in console after every updation of counter the the page relodes</h2>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Increment
        </button>
        <button
          onClick={() => setCount((prev) => prev - 1)}
          className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default UseEffect;
