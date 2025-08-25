import React, { useState } from 'react';
import Modal from './Modal';

const Portal: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>
          <nav className="space-y-2">
            <a href="#" className="block text-gray-700 hover:text-blue-500">Home</a>
            <a href="#" className="block text-gray-700 hover:text-blue-500">Reports</a>
            <a href="#" className="block text-gray-700 hover:text-blue-500">Settings</a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Welcome Back</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Open Modal
          </button>
        </header>

        <section className="bg-white p-6 rounded shadow-md">
          <p className="text-gray-700">
            {isModalOpen} This is a simple dashboard layout using Tailwind CSS. The modal component is rendered via React Portal.
          </p>
         
        </section>
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Modal Title</h2>
        <p className="text-gray-600">This is a modal content inside a portal.</p>
      </Modal>
    </div>
  );
};

export default Portal;
