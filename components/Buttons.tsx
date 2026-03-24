/** @format */

import React from "react";
import { Pads } from "../src/assets/Datas/Pads";
import Padz from "./Padz";

export default function Buttons() {
  const [pads, setPads] = React.useState(Pads);

  function toggle(id: number) {
    setPads((previousPads) =>
      previousPads.map((item) =>
        item.id === id ? { ...item, on: !item.on } : item,
      ),
    );
  }

  const buttonElements = pads.map((pad) => {
    return (
      <Padz
        key={pad.id}
        color={pad.color}
        id={pad.id}
        on={pad.on}
        toggle={toggle}
      />
    );
  });

  function turnOffAll() {
    setPads((previousPads) => previousPads.map((item) => ({ ...item, on: false })));
  }

  return (
    <main>
      <div className='pad-container'>{buttonElements}</div>

      <button onClick={turnOffAll}>Turn Off All</button>
    </main>
  );
}


// import React from "react";
// import padsData from "./pads";
// import Pad from "./Pad";

// export default function App() {
//   const [pads, setPads] = React.useState(padsData);

//   function toggle(id) {
//     console.log(id);
//     setPads((previousPads) =>
//       previousPads[id].map((item) => ({ ...item, no: (prevOn) => prevOn })),
//     );
//     /**
//      * Challenge:
//      * Call setPads to update the state of the one pad that was
//      * clicked. Map over the previous pads array, and if the current
//      * item you're iterating over has the same id as the `id` passed
//      * to this function, then return a new object with the `on` value
//      * set to the opposite of what it was before.
//      * Otherwise (if the ids don't match), just return the previous
//      * item as it was, unchanged.
//      */
//   }

//   const buttonElements = pads.map((pad) => (
//     <Pad
//       toggle={toggle}
//       id={pad.id}
//       key={pad.id}
//       color={pad.color}
//       on={pad.on}
//     />
//   ));

//   return (
//     <main>
//       <div className='pad-container'>{buttonElements}</div>
//     </main>
//   );
// }

