import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Counter from './Counter';
import BoxFilled from './BoxFilled';


const CouterApp: React.FC = () => {
  return (
       <Provider store={store}>
      <Counter/>
      <BoxFilled/>
    </Provider>
  );
};

export default CouterApp;