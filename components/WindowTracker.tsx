/** @format */

import { useState } from "react";
import WindowSize from "./WindowSize";

export default function WindowTracker() {
  const [show, setShow] = useState(true);

  function toggleShow() {
    setShow((prevShow) => !prevShow);
  }

  return (
    <main className="container">
      <button onClick={toggleShow}>Toggle WindowTracker</button>
      {show ? <WindowSize /> : null}
    </main>
  );
}
