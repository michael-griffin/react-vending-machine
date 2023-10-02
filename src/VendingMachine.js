import { NavLink, Link, BrowserRouter, Routes, Route } from "react-router-dom";
// import CokeZero from "./CokeZero";
// import FlamingChips from "./FlamingChips";
// import Peanuts from "./Peanuts";

import "./VendingMachine.css";

function Coke() {
    return (
        <>
            <h1>This is the coke</h1>
            <Link to="/">
                <button>HOME</button>
            </Link>
        </>
    );
}

function Peanuts() {
    return (
        <>
            <h1>This is the Peanuts</h1>
            <Link to="/">
                <button>HOME</button>
            </Link>
        </>
    );
}

function FlamingChips() {
    return (
        <>
            <h1>This is flaming chips</h1>
            <Link to="/">
                <button>HOME</button>
            </Link>
        </>
    );
}

function VendingMachine() {
    return (
        <div className="VendingMachine">
            <h1>VENDING MACHINE</h1>
            <BrowserRouter>
                <div>
                    <NavLink className="link" to="/coke">
                        <p>COKE</p>
                    </NavLink>
                    <NavLink className="link" to="/peanuts">
                        <p>PEANUTS</p>
                    </NavLink>
                    <NavLink className="link" to="/flamingchips">
                        <p>FLAMING CHIPS</p>
                    </NavLink>
                </div>
                <Routes>
                    <Route path="/coke" element={<Coke />} />
                    <Route path="/peanuts" element={<Peanuts />} />
                    <Route path="/flamingchips" element={<FlamingChips />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default VendingMachine;
