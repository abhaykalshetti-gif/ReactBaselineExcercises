import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center">React Baseline Courses</h1>

      {/* Components Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Components</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li><Link to="functional" className="text-blue-600 hover:underline">Functional Components</Link></li>
          <li><Link to="class" className="text-blue-600 hover:underline">Class Components</Link></li>
        </ol>
      </div>

      {/* Props and State */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">React Props and State</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li><Link to="propsclild" className="text-blue-600 hover:underline">React Props using Functional Components</Link></li>
        </ol>
      </div>

      {/* Constructors and Lifecycle */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Constructors and Lifecycle</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li><Link to="constructors" className="text-blue-600 hover:underline">Constructors</Link></li>
          <li><Link to="lifecycle" className="text-blue-600 hover:underline">Lifecycle Methods</Link></li>
        </ol>
      </div>

      {/* Forms */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">React Forms</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li><Link to="controlled" className="text-blue-600 hover:underline">Controlled Forms</Link></li>
          <li><Link to="uncontrolled" className="text-blue-600 hover:underline">Uncontrolled Forms</Link></li>
        </ol>
      </div>

      {/* Events */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Events and Handling</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li><Link to="events" className="text-blue-600 hover:underline">Events</Link></li>
        </ol>
      </div>

      {/* Conditional Statements */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">React Conditional Statements</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li><Link to="ifstat" className="text-blue-600 hover:underline">If-Else Statements</Link></li>
          <li><Link to="logical" className="text-blue-600 hover:underline">Logical AND Statements</Link></li>
          <li><Link to="switch" className="text-blue-600 hover:underline">Switch Statements</Link></li>
          <li><Link to="ternary" className="text-blue-600 hover:underline">Ternary Statements</Link></li>
        </ol>
      </div>

      {/* Lists and Refs */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Lists and Refs</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li><Link to="lists" className="text-blue-600 hover:underline">Lists and Keys</Link></li>
          <li><Link to="refs" className="text-blue-600 hover:underline">Refs</Link></li>
        </ol>
      </div>

      {/* React Hooks */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">React Hooks</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li><Link to="usestate" className="text-blue-600 hover:underline">useState Hook</Link></li>
          <li><Link to="useeffect" className="text-blue-600 hover:underline">useEffect Hook</Link></li>
        </ol>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Redux</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li><Link to="redux" className="text-blue-600 hover:underline">Redux implementation</Link></li>
        </ol>
      </div>
    </div>
  );
}
