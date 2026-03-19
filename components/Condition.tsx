/** @format */

import React from "react";

export default function Condition() {
  const [unreadMessages, setUnreadMessages] = React.useState(["a", "b"]);

  /**
   * Challenge:
   * Only display the <h1> below if there are unread messages
   */

    return (
      <div>
        {unreadMessages.length > 0 && (
          <h1>You have _ {unreadMessages}unread messages!</h1>
        )}
        {unreadMessages.length === 0 && (
          <h1>"You * have no unread messages".</h1>
        )}
 
      </div>
    ); 
}
