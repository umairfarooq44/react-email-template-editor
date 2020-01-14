import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

// Routes
import Routes from './Routes';

// Store Configuration
import createStore from './store';

const STORE = createStore();

const Container = styled.div`
  padding: 0 5%;
`;

const App = () => {
  return (
    <Provider store={STORE}>
      <Container>
        <Router>
          <Routes />
        </Router>
      </Container>
    </Provider>
  );
};

export default App;
