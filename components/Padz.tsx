/** @format */

import React from "react";

type PadzProps = {
  id: number;
  color: string;
  on: boolean;
};

export default function Padz(props: PadzProps) {
  const [onButton, setOnButton] = React.useState(props.on);

  function toggleTrack() {
    setOnButton((previousOn) => !previousOn);
  }
  return (
    <button
      onClick={toggleTrack}
      title={`Pad ${props.id}`}
      aria-label={`Pad ${props.id}`}
      style={{ backgroundColor: props.color }}
      className={onButton ? "on" : "off"}></button>
  );
}
