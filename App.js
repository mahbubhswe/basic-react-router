import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavLink from "./components/NavLink";
import NavRouts from "./components/NavRouts";
export default function App() {
  return (
    <BrowserRouter>
      <NavLink></NavLink>
      <NavRouts></NavRouts>
    </BrowserRouter>
  );
}
