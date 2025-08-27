import React, { useState } from 'react';
import Modal from './Modal';

const Portal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="text-center mt-12">
      <h1 className="text-3xl font-bold mb-2">React Portals Example</h1>
      <p className="mb-4 text-gray-600">Click the button below to open the modal.</p>
      <button
        onClick={handleOpenModal}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Open Modal
      </button>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <h2 className="text-2xl font-semibold mb-2">This is a Portal Modal</h2>
          <p className="text-gray-700">
            This is react Portal.
          </p>
        </Modal>
      )}
    </div>
  );
};

export default Portal;
