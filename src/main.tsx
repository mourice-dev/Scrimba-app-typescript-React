/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "../components/Header";
import List from "../components/List";
import Mains from "../components/Mains";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Mains />
    <List />
  </StrictMode>,
);
