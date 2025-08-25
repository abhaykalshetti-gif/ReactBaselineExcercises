// File: src/datepicker/DatePickerWrapper.tsx

import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker'; // Renamed import
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const DatePickerWrapper: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Tailwind Date Picker</h1>

      <ReactDatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a date"
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {selectedDate && (
        <p className="mt-4 text-lg text-gray-700">
          Selected Date: <span className="font-medium text-blue-600">{format(selectedDate, 'dd MMM yyyy')}</span>
        </p>
      )}
    </div>
  );
};

export default DatePickerWrapper;
