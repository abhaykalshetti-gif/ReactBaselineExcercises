import React, { Component } from 'react';

interface LifecycleProps {
  initialCount: number;
}

interface LifecycleState {
  count: number;
}

class LifecycleDemo extends Component<LifecycleProps, LifecycleState> {
  constructor(props: LifecycleProps) {
    super(props);
    this.state = {
      count: props.initialCount,
    };
    console.log('constructor');
  }

  static getDerivedStateFromProps(
    props: LifecycleProps,
    state: LifecycleState
  ): Partial<LifecycleState> | null {
    console.log('getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(
    nextProps: LifecycleProps,
    nextState: LifecycleState
  ): boolean {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(
    prevProps: LifecycleProps,
    prevState: LifecycleState
  ): any {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(
    prevProps: LifecycleProps,
    prevState: LifecycleState,
    snapshot: any
  ) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log('render');
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">Lifecycle Demo</h2>
        <p className="text-xl text-gray-800 mb-4">
          Count: <span className="font-semibold">{this.state.count}</span>
        </p>
        <button
          onClick={this.increment}
          className="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 transition"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default LifecycleDemo;
