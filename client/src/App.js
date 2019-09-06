import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Leaderboard from './components/Leaderboard';
import ItemModal from './components/itemModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <AppNavbar />
        <Container className="Main">
          <ItemModal />
          <Leaderboard />
        </Container>

      </div>
    </Provider>
  );
}

export default App;
