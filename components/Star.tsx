export default function Star(props) {
    return (
      <button
        aria-pressed={contact.isFavorite}
        aria-label={
          contact.isFavorite ? "Remove from favorites" : "Add to favorites"
        }
        className='favorite-button'>
        <img
          src={starIcon}
          alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
          className='favorite'
        />
      </button>
    );
}