import React, { useState } from 'react';
import { Student } from './types';
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';

const UnitTest: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  const addStudent = (student: Omit<Student, 'id'>) => {
    setStudents([...students, { ...student, id: Date.now().toString() }]);
  };

  const updateStudent = (updated: Student) => {
    setStudents(students.map(s => (s.id === updated.id ? updated : s)));
    setEditingStudent(null);
  };

  const deleteStudent = (id: string) => {
    setStudents(students.filter(s => s.id !== id));
  };

  return (
      <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Student Manager</h1>
      <StudentForm
        onAdd={addStudent}
        onUpdate={updateStudent}
        editingStudent={editingStudent}
      />
      <StudentTable
        students={students}
        onEdit={setEditingStudent}
        onDelete={deleteStudent}
      />
    </div>
  );
};

export default UnitTest;
