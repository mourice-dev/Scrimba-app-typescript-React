/** @format */
import starFilled from "../src/assets/images/star-filled.png";
import starEmpty from "../src/assets/images/star-empty.png";

type StarProps = {
  isFilled: boolean;
  onClick: () => void;
};

export default function Star(props: StarProps) {
  const starIcon = props.isFilled ? starFilled : starEmpty;

  return (
    <button
      onClick={props.onClick}
      aria-pressed={props.isFilled ? "true" : "false"}
      aria-label={props.isFilled ? "Remove from favorites" : "Add to favorites"}
      className='favorite-button'>
      <img
        src={starIcon}
        alt={props.isFilled ? "filled star icon" : "empty star icon"}
        className='favorite'
      />
    </button>
  );
}
