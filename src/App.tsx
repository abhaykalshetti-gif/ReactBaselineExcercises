import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Functionalcomponents from './components/Functionalcomponents';
import Classcomponents from './components/Classcomponents';
import Parent from './reactProps/Parent';
import UsageofConstructors from './constructorsandLifecyclemethods/UsageofContructors';
import UsageofLifecycle from './constructorsandLifecyclemethods/UsageofLifecycle';
import ControlledForm from './reactforms/Controlledform';
import UncontrolledForm from './reactforms/UnControlledform';
import Events from './events&handling/Events';
import IfElse from './ConditionalStatements/IfStatements'
import LogicalAnd from './ConditionalStatements/LogicalAnd'
import SwitchCase from './ConditionalStatements/SwitchCase';
import Ternary from './ConditionalStatements/Ternary';
import Refs from './listsandrefs/Refs'
import Lists from './listsandrefs/Lists';
import UseState from './reacthooks/UseState';
import UseEffect from './reacthooks/UseEffect';
import CouterApp  from './redux-react/CouterApp'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/functional" element={<Functionalcomponents />} />
        <Route path="/class" element={<Classcomponents/>} />
        <Route path="/propsclild" element={<Parent/>} />
        <Route path="/constructors" element={<UsageofConstructors/>} />
        <Route path="/lifecycle" element={<UsageofLifecycle/>} />
        <Route path="/controlled" element={<ControlledForm/>} />
        <Route path="/uncontrolled" element={<UncontrolledForm/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/ifstat" element={<IfElse/>} />
        <Route path="/logical" element={<LogicalAnd/>} />
        <Route path="/switch" element={<SwitchCase/>} />
        <Route path="/ternary" element={<Ternary/>} />
        <Route path="/lists" element={<Lists/>} />
        <Route path="/refs" element={<Refs/>} />
        <Route path="/usestate" element={<UseState/>} />
        <Route path="/useEffect" element={<UseEffect/>} />
        <Route path="/redux" element={<CouterApp/>} />
        </Routes>
    </Router>
  );
}

export default App;
