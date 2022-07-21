import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Router } from "./routes/Router";
import { GlobalStyle } from "./Global";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Router />
      <GlobalStyle />
    </div>
  );
}

export default App;
