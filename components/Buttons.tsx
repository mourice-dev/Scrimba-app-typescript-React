/** @format */

import React from "react";
import { Pads } from "../src/assets/Datas/Pads";

export default function Buttons() {
  const [pads, setPads] = React.useState(Pads);

  const buttonElements = pads.map((pad) => (
    <button
      style={{ backgroundColor: pad.color }}
      key={pad.id}
      title={`Pad ${pad.id}`}
      aria-label={`Pad ${pad.id}`}
    ></button>
  ));

    return (
      
    <main>
      <div className='pad-container'>{buttonElements}</div>
    </main>
  );
}
