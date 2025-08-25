import React from 'react';
import { Student } from './types';

interface Props {
  students: Student[];
  onEdit: (student: Student) => void;
  onDelete: (id: string) => void;
}

const StudentTable: React.FC<Props> = ({ students, onEdit, onDelete }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded shadow-md">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Age</th>
            <th className="py-2 px-4 border-b">Grade</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{s.name}</td>
              <td className="py-2 px-4 border-b">{s.age}</td>
              <td className="py-2 px-4 border-b">{s.grade}</td>
              <td className="py-2 px-4 border-b space-x-2">
                <button
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  onClick={() => onEdit(s)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => onDelete(s.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {students.length === 0 && (
        <p className="text-center mt-4 text-gray-500">No students added yet.</p>
      )}
    </div>
  );
};

export default StudentTable;
