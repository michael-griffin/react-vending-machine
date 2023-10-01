import { BrowserRouter, Routes, Route } from "react-router-dom";

// import CokeZero from "./CokeZero";
// import FlamingChips from "./FlamingChips";
// import Peanuts from "./Peanuts";

function Coke (){

  return (
    <h1>This is the coke route</h1>
  )
}

function Peanuts (){

  return (
    <h1>This is the Peanuts route</h1>
  )
}

function FlamingChips (){

  return (
    <h1>This is the flaming chips route</h1>
  )
}


function VendingMachine () {

  return (
    <div className="VendingMachine">
      <h1>This could be a navbar</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/coke" element={<Coke />} />
          <Route path="/peanuts" element={<Peanuts />} />
          <Route path="/flamingchips" element={<FlamingChips />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default VendingMachine;
