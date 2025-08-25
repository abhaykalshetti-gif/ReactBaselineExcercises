import { render, screen, fireEvent } from '@testing-library/react';
import StudentForm from './StudentForm';

describe('StudentForm', () => {
  it('adds a student', () => {
    const onAdd = jest.fn();
    const onUpdate = jest.fn();

    render(<StudentForm onAdd={onAdd} onUpdate={onUpdate} editingStudent={null} />);

    fireEvent.change(screen.getByPlaceholderText(/name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText(/age/i), { target: { value: '21' } });
    fireEvent.change(screen.getByPlaceholderText(/grade/i), { target: { value: 'A' } });

    fireEvent.click(screen.getByText(/add/i));

    expect(onAdd).toHaveBeenCalledWith({ name: 'John', age: 21, grade: 'A' });
  });
});
