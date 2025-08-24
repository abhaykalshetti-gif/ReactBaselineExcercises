import React, { Component, createRef, FormEvent } from 'react';

interface UncontrolledFormState {
  out: string;
}

class UncontrolledForm extends Component<{}, UncontrolledFormState> {
  nameRef = createRef<HTMLInputElement>();
  emailRef = createRef<HTMLInputElement>();

  state = {
    out: '',
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = this.nameRef.current?.value;
    const email = this.emailRef.current?.value;
    this.setState({ out: 'Successfully submitted' });
    console.log('Submitted:', { name, email });
  };

  render() {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Uncontrolled Form</h2>
        {this.state.out && (
          <h1 className="mb-4 text-green-600 font-medium">{this.state.out}</h1>
        )}
        <form onSubmit={this.handleSubmit} className="space-y-4">
          <input
            type="text"
            ref={this.nameRef}
            placeholder="Enter name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            ref={this.emailRef}
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

export default UncontrolledForm;
