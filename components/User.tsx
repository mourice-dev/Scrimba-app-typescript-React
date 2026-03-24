/** @format */
import React from "react";
import avatar from "../src/assets/images/user.png";
import starFilled from "../src/assets/images/star-filled.png";
import starEmpty from "../src/assets/images/star-empty.png";
import Star from "./Star"
export default function User() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  const starIcon = contact.isFavorite ? starFilled : starEmpty;

  function toggleFavorite(): void {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }

  return (
    <main>
      <article className='card'>
        <img
          src={avatar}
          className='avatar'
          alt='User profile picture of John Doe'
        />
        <div className='info'>
< Star />
          <h2 className='name'>
            {contact.firstName} {contact.lastName}
          </h2>
          <p className='contact'>{contact.phone}</p>
          <p className='contact'>{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
