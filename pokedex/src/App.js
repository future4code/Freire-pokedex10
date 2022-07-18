import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Router } from './Routes/Router';
import { GlobalStyle } from './Global';

function App() {
  return (
    <div>
      <Router/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
