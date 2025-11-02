import React from 'react'
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CoffeePage from "./pages/CoffeePage";
import PastryPage from "./pages/PastryPage";
// Add this import
import PdHotDarkMocha from "./pages/productdetails/pdHotDarkMocha";
import PdHotAmericano from "./pages/productdetails/pdHotAmericano";
import PdHotSpanishLatte from "./pages/productdetails/pdHotSpanishLatte";
import PdColdDarkMocha from "./pages/productdetails/pdColdDarkMocha";
import PdColdAmericano from "./pages/productdetails/pdColdAmericano";
import PdColdSpanishLatte from "./pages/productdetails/pdColdSpanishLatte";
import PdColdSaltedCaramel from "./pages/productdetails/pdColdSaltedCaramel";
import PdColdCaramelMacchiato from "./pages/productdetails/pdColdCaramelMacchiato";
import PdMilkyCheeseBread from "./pages/productdetails/pdMilkyCheeseBread";
import PdDoubleCheeseBread from "./pages/productdetails/pdDoubleCheeseBread";
import PdCinnamonRoll from "./pages/productdetails/pdCinnamonRoll";
import PdChocoBliss from "./pages/productdetails/pdChocoBliss";
import PdChocoWaltz from "./pages/productdetails/pdChocoWaltz";
import PdMatchaDream from "./pages/productdetails/pdMatchaDream";
import PdCrimsonCrave from "./pages/productdetails/pdCrimsonCrave";
import PdChocoBrownie from "./pages/productdetails/pdChocoBrownie";
import PdCrimsonCreams from "./pages/productdetails/pdCrimsonCreams";
import PdBananaMuffin from "./pages/productdetails/pdBananaMuffin";
import PdChocolateDreamCake from "./pages/productdetails/pdChocolateDreamCake";

const App = () => {
  return ( 
    <div data-theme="autumn">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coffee" element={<CoffeePage />} />
        <Route path="/pastry" element={<PastryPage />} />
        <Route path="/product/hot-dark-mocha" element={<PdHotDarkMocha />} />
        <Route path="/product/hot-americano" element={<PdHotAmericano />} />
        <Route path="/product/hot-spanish-latte" element={<PdHotSpanishLatte />} />
        <Route path="/product/cold-dark-mocha" element={<PdColdDarkMocha />} />
        <Route path="/product/cold-americano" element={<PdColdAmericano />} />
        <Route path="/product/cold-spanish-latte" element={<PdColdSpanishLatte />} />
        <Route path="/product/cold-salted-caramel" element={<PdColdSaltedCaramel />} />
        <Route path="/product/cold-caramel-macchiato" element={<PdColdCaramelMacchiato />} />
        <Route path="/product/milky-cheese-bread" element={<PdMilkyCheeseBread />} />
        <Route path="/product/double-cheese-bread" element={<PdDoubleCheeseBread />} />
        <Route path="/product/cinnamon-roll" element={<PdCinnamonRoll />} />
        <Route path="/product/choco-bliss" element={<PdChocoBliss />} />
        <Route path="/product/choco-waltz" element={<PdChocoWaltz />} />
        <Route path="/product/matcha-dream" element={<PdMatchaDream />} />
        <Route path="/product/crimson-crave" element={<PdCrimsonCrave />} />
        <Route path="/product/choco-brownie" element={<PdChocoBrownie />} />
        <Route path="/product/crimson-creams" element={<PdCrimsonCreams />} />
        <Route path="/product/banana-muffin" element={<PdBananaMuffin />} />
        <Route path="/product/choco-dream-cake" element={<PdChocolateDreamCake />} />
      </Routes>
    </div>
  ); 
};

export default App;
