/** @format */
import starFilled from "../src/assets/images/star-filled.png";
import starEmpty from "../src/assets/images/star-empty.png";

export default function Star(props) {

  const starIcon = props.isFilled ? starFilled : starEmpty;

  return (
    
    <button
      aria-pressed={props.isFilled}
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
