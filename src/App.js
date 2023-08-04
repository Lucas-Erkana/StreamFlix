import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import ScrollToTop from "./utils/scrollToTop";
import routeList from "./RouteList";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Search />
      <ScrollToTop />
      <Routes>
        {routeList.map((route, i) => {
          return <Route key={i} path={route.path} element={route.element} />;
        })}
      </Routes>
    </Router>
  );
};

export default App;
