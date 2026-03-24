/** @format */

type PadzProps = {
  id: number;
  color: string;
  on: boolean;
  toggle: (id: number) => void;
};

export default function Padz(props: PadzProps) {
  return (
    <button
      onClick={() => props.toggle(props.id)}
      title={`Pad ${props.id}`}
      aria-label={`Pad ${props.id}`}
      style={{ backgroundColor: props.color }}
      className={props.on ? "on" : "off"}></button>
  );
}
