import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Main from './Components/mainComponent'
import {Provider} from 'react-redux';
import {configStore} from '../src/shared/store';

const store=configStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main></Main>    
      </BrowserRouter>
    </Provider>
    );
}

export default App;
