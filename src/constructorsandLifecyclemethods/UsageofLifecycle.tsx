import React, { Component } from 'react';
import LifecycleDemo from './LifeCycleDemo';

interface AppState {
  show: boolean;
}

class UsageofLifecycle extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      show: true,
    };
  }

  toggleComponent = () => {
    this.setState((prev) => ({ show: !prev.show }));
  };

  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">Lifecycle Usage</h1>
        <button
          onClick={this.toggleComponent}
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          {this.state.show ? 'Hide' : 'Show'} Component
        </button>

        {this.state.show && <LifecycleDemo initialCount={0} />}
      </div>
    );
  }
}

export default UsageofLifecycle;
