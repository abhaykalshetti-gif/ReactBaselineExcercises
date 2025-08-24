import React, { Component } from 'react';

interface ConstructorsProps {
  title: string;
}

interface ConstructorsState {
  count: number;
}

class Constructors extends Component<ConstructorsProps, ConstructorsState> {
  constructor(props: ConstructorsProps) {
    super(props);
    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  componentDidUpdate(prevProps: ConstructorsProps, prevState: ConstructorsState) {
    if (prevState.count !== this.state.count) {
      console.log('Component did update');
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">{this.props.title}</h1>
        <p className="text-xl text-gray-800 mb-4">Count: <span className="font-semibold">{this.state.count}</span></p>
        <button
          onClick={this.increment}
          className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Constructors;
