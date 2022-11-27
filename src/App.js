import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logo from "./images/logo.svg";
import Main from "./pages/Main";
import Property from "./pages/Property";
import About from "./pages/About";
import "./App.css";
import Twitter from "./images/twitter.svg";
import IG from "./images/instagram.svg";
import FB from "./images/facebook.svg";
import PropertyShow from "./pages/PropertyShow"

function App() {
  return (
    <div>
      <header className="flex flex-col">
        <div className="w-full h-5 bg-orange-b"></div>
        <div className="flex flex-row items-center justify-between px-20 py-3">
          <a
            className="w-28 h-12 bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url('${Logo}')`,
            }}
            href="/"
          />
          <div className="flex flex-row gap-10 text-orange-b text-lg ">
            <a className="" href="/properties">
              properties
            </a>
            <a className="" href="/about">
              about
            </a>
            <a className="" href="/contact">
              contact
            </a>
          </div>
        </div>
      </header>
      <Router>
        <Routes>
          <Route element={<Main />} path="/"></Route>
          <Route element={<About />} path="/about"></Route>
          <Route element={<Property />} path="/properties"></Route>
          <Route element={<PropertyShow />} path="/properties/1"></Route>
        </Routes>
      </Router>

      <footer class="pt-20 mb-10">
        <div className="border border-slate border-2 " />
        <div className="flex flex-row gap-3 justify-between px-20 w-full pt-3">
          <div
            className="w-64 h-28 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url('${Logo}')`,
            }}
          ></div>

          <div className="flex flex-row gap-6 pr-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-lg uppercase text-orange-b">Company</h2>
              <h2 className="hover:orange-b">about</h2>
              <h2 className="hover:orange-b">properties</h2>
            </div>
            <div className="flex flex-col text-lg uppercase text-orange-b gap-3">
              <h2>Social</h2>
              <div className="flex flex-row gap-3">
                <a
                  style={{ backgroundImage: `url('${Twitter}')` }}
                  className="w-6 h-6 bg-cover bg-no-repeat "
                />
                <a
                  style={{ backgroundImage: `url('${IG}')` }}
                  className="w-6 h-6 bg-cover bg-no-repeat hover:text-orange-b"
                />
                <a
                  style={{ backgroundImage: `url('${FB}')` }}
                  className="w-6 h-6 bg-cover bg-no-repeat hover:text-orange-b"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
