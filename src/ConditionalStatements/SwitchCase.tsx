import React, { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const SwitchCase: React.FC = () => {
  const [status, setStatus] = useState<Status>('idle');

  const renderStatusMessage = () => {
    switch (status) {
      case 'loading':
        return <p className="text-yellow-600 text-lg font-semibold">⏳ Loading...</p>;
      case 'success':
        return <p className="text-green-600 text-lg font-semibold">✅ Data loaded!</p>;
      case 'error':
        return <p className="text-red-600 text-lg font-semibold">❌ Error occurred.</p>;
      default:
        return <p className="text-gray-600 text-lg font-medium">Click a button to begin.</p>;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 space-y-6">
      {renderStatusMessage()}
      
      <div className="flex space-x-4">
        <button
          onClick={() => setStatus('loading')}
          className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition"
        >
          Load
        </button>
        <button
          onClick={() => setStatus('success')}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Success
        </button>
        <button
          onClick={() => setStatus('error')}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Error
        </button>
        <button
          onClick={() => setStatus('idle')}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default SwitchCase;
