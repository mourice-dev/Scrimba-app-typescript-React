/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Header from "../components/Header";
// import List from "../components/List";
// import Mains from "../components/Mains";
// import User from "../components/User";
// import Forms from "../components/Forms";
// import Counting from "../components/Counting";
import Buttons from "../components/Buttons";

createRoot(document.getElementById("root")!).render(
  <StrictMode>

    < Buttons />
  </StrictMode>,
);
