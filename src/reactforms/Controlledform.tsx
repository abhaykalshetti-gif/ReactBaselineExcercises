import React, { Component, ChangeEvent, FormEvent } from 'react';

interface FormState {
  name: string;
  email: string;
  output: string;
}

class ControlledForm extends Component<{}, FormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: '',
      email: '',
      output: '',
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value } as Pick<FormState, keyof FormState>);
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({
      output: 'Successfully submitted',
      name: '',
      email: '',
    });
    console.log('Submitted:', this.state);
  };

  render() {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Controlled Form</h2>
        {this.state.output && (
          <h1 className="mb-4 text-green-600 font-medium">{this.state.output}</h1>
        )}
        <form onSubmit={this.handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            required
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Enter name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            required
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Enter email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ControlledForm;
