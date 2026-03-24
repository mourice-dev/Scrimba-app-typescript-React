/** @format */

type PadzProps = {
  id: number;
  on: boolean;
  toggle: (id: number) => void;
};

export default function Padz(props: PadzProps) {
  return (
    <button
      onClick={() => props.toggle(props.id)}
      title={`Pad ${props.id}`}
      aria-label={`Pad ${props.id}`}
      className={`pad-button pad-${props.id} ${props.on ? "on" : "off"}`}></button>
  );
}
