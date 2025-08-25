import React, { useEffect, useState } from 'react';
import { Student } from './types';

interface Props {
  onAdd: (student: Omit<Student, 'id'>) => void;
  onUpdate: (student: Student) => void;
  editingStudent: Student | null;
}

const StudentForm: React.FC<Props> = ({ onAdd, onUpdate, editingStudent }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name);
      setAge(editingStudent.age.toString());
      setGrade(editingStudent.grade);
    }
  }, [editingStudent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const studentData = { name, age: parseInt(age), grade };

    if (editingStudent) {
      onUpdate({ ...studentData, id: editingStudent.id });
    } else {
      onAdd(studentData);
    }

    setName('');
    setAge('');
    setGrade('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xl mx-auto"
    >
      <h2 className="text-xl font-bold mb-4 text-center">
        {editingStudent ? 'Edit Student' : 'Add Student'}
      </h2>

      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <input
          type="number"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
      >
        {editingStudent ? 'Update Student' : 'Add Student'}
      </button>
    </form>
  );
};

export default StudentForm;
