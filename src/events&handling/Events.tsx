import React, {
  useState,
  ChangeEvent,
  FormEvent,
  MouseEvent,
  KeyboardEvent,
  FocusEvent,
} from 'react';

const Events: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [keyPressed, setKeyPressed] = useState('');
  const [mouseStatus, setMouseStatus] = useState('');
  const [focusStatus, setFocusStatus] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormMessage(`Form submitted with value: ${inputValue}`);
    setInputValue('');
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    alert('Button Clicked!');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    setKeyPressed(`Key pressed: ${e.key}`);
  };

  const handleMouseEnter = () => {
    setMouseStatus('Mouse is over the box');
  };

  const handleMouseLeave = () => {
    setMouseStatus('Mouse left the box');
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setFocusStatus('Input focused');
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setFocusStatus('Input blurred');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md mt-10 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">
        React Events Handling (Functional Component)
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Type something"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>

      {formMessage && <p className="text-green-600">{formMessage}</p>}
      {keyPressed && <p className="text-blue-600">{keyPressed}</p>}
      {focusStatus && <p className="text-purple-600">{focusStatus}</p>}

      <button
        onClick={handleClick}
        className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Click Me
      </button>

      <div
        className="mt-6 w-full h-24 bg-gray-100 border border-gray-300 flex items-center justify-center cursor-pointer rounded"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover over me
      </div>
      <p className="mt-2 text-gray-700">{mouseStatus}</p>
    </div>
  );
};

export default Events;
