import React from 'react';

interface ChildProps {
  name: string;
  age: number;
  isStudent?: boolean;
}

const Child: React.FC<ChildProps> = ({ name, age, isStudent = false }) => {
  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Child Component</h2>
      <p className="mb-2">
        <span className="font-medium">Name:</span> {name}
      </p>
      <p className="mb-2">
        <span className="font-medium">Age:</span> {age}
      </p>
      <p>
        <span className="font-medium">Status:</span>{' '}
        <span className={isStudent ? 'text-green-600' : 'text-red-600'}>
          {isStudent ? 'Student' : 'Not a Student'}
        </span>
      </p>
    </div>
  );
};

export default Child;
