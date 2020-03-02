import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import SlotsContainer from './components/SlotsContainer'


function App() {
  return (
    <Provider store ={store}>
     
    <div className="App">
    <h1>Movies</h1>
    <SlotsContainer/>
    </div>
    </Provider>
  );
}

export default App;
