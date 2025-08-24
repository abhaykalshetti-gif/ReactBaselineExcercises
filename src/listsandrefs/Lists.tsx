import React from 'react';

interface User {
  id: number;
  name: string;
}

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const Lists: React.FC = () => {
  return (
    <ul className="max-w-sm mx-auto mt-8 space-y-2 list-disc list-inside text-gray-700">
      {users.map((user) => (
        <li key={user.id} className="p-2 bg-gray-100 rounded shadow-sm hover:bg-gray-200 transition">
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default Lists;
