/** @format */

import React from "react";

export default function List() {
  const [myFavoriteThings, setMyFavoriteThings]  = React.useState<string[]>([]);

  const allFavoriteThings = [
    "💦🌹",
    "😺",
    "💡🫖",
    "🔥🧤",
    "🟤🎁",
    "🐴",
    "🍎🥧",
    "🚪🔔",
    "🛷🔔",
    "🥩🍝",
  ];
  const thingsElements = myFavoriteThings.map((thing) => (
    <p key={thing}>{thing}</p>
  ));

  function addFavoriteThing() {
    setMyFavoriteThings((prevFavThings: string[]) => [...prevFavThings, allFavoriteThings[prevFavThings.length] ]);
    
  }

  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live='polite'>{thingsElements}</section>
    </main>
  );
}
