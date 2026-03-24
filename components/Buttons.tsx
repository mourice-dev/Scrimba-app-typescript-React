/** @format */

import React from "react";
import { Pads } from "../src/assets/Datas/Pads";
import Padz from "./Padz";

export default function Buttons() {
  const [pads, setPads] = React.useState(Pads);

  const buttonElements = pads.map((pad) => {
    return <Padz key={pad.id} color={pad.color} id={pad.id} on={pad.on} />;
  });
    function turnOffAll() {
        setPads((previousPads) => previousPads.map(item => ({ ...item, on: false }))
        )
    }

  return (
    <main>
      <div className='pad-container'>{buttonElements}</div>

      <button onClick={turnOffAll}>Turnoff All</button>
    </main>
  );
}
