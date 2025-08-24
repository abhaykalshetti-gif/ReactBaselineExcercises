import React from 'react';
import {  useSelector } from 'react-redux';
import { RootState} from './store';

const BoxFilled: React.FC = () => {
  const n = useSelector((state: RootState) => state.counter.value);

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded shadow-md text-center">
        <h1>{Math.floor(n/10)} boxes filled</h1>
    </div>
  );
};

export default BoxFilled;
