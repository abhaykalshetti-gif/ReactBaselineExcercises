import React, { useState } from 'react';
import Table from './Table';

const Pagination: React.FC = () => {
  const items = Array.from({ length: 42 }, (_, i) => `Item ${i + 1}`);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Simple Pagination</h1>
      
      <ul className="mb-4">
        {currentItems.map((item, index) => (
          <li key={index} className="py-1 border-b">{item}</li>
        ))}
      </ul>

      <Table
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Pagination;
