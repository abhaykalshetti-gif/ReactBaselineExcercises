import React, { useState } from 'react';

const LogicalAnd: React.FC = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <button
        onClick={() => setShowText(!showText)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mb-4"
      >
        Toggle Message
      </button>

      {showText && (
        <p className="text-lg text-gray-700 font-medium">
          🎉 This is a secret message!
        </p>
      )}
    </div>
  );
};

export default LogicalAnd;
