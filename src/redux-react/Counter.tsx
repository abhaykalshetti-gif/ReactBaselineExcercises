import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { increment, decrement, reset } from './counterSlice';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded shadow-md text-center">
      <h1 className="text-3xl font-bold mb-4">Redux Counter</h1>
      <p className="text-xl mb-6">Count: {count}</p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          -
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
