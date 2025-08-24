
import React, { useState } from 'react';
import Child from './Child';

const Parent: React.FC = () => {
  const [name, setName] = useState<string>('Abhay');
  const [age, setAge] = useState<number>(20);
  const [isStudent, setIsStudent] = useState<boolean>(true);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-50 rounded shadow-md text-center">
      <h1 className="text-2xl font-bold mb-6">React TypeScript Props & State Example</h1>

      <Child name={name} age={age} isStudent={isStudent} />

      <div className="mt-6 flex justify-center space-x-4">
        <button
          onClick={() => setName('Vinay')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Change Name
        </button>
        <button
          onClick={() => setAge((prev) => prev + 1)}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Increase Age
        </button>
        <button
          onClick={() => setIsStudent((prev) => !prev)}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        >
          Toggle Student Status
        </button>
      </div>
    </div>
  );
};

export default Parent;
