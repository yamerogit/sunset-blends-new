import React from 'react'
import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage";
import CoffeePage from "./pages/CoffeePage";
import PastryPage from "./pages/PastryPage";

const App = () => {
    return ( <div data-theme="autumn">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coffee" element={<CoffeePage />} />
        <Route path="/pastry" element={<PastryPage />} />
      </Routes>
      </div>
  );    
};

export default App;