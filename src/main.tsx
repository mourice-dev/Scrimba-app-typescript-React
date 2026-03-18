/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Header from "../components/Header";
// import List from "../components/List";
// import Mains from "../components/Mains";
import User from "../components/User";
import Forms from "../components/Forms";

createRoot(document.getElementById("root")!).render(
  <StrictMode>

    < Forms />
  </StrictMode>,
);
