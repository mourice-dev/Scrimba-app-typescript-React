/** @format */

import { useState } from "react";
// import type { ReactFormState } from "react-dom/client";

export default function Mains() {
  const [ingredients, setIngredients] = useState<string[]>([]);

  const ingredient = ingredients.map((item) => {
    return <li key={item}>{item}</li>;
  });

  function submitHandler(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
      const newIngredient = formData.get("ingredient");
      if (typeof newIngredient === "string") {
          setIngredients((previousIngredients) => [
            ...previousIngredients,
            newIngredient,
          ]);
      }
      
  }

  return (
    <main>
      <form className='add-ingredient-form' onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='e.g. oregano'
          aria-label='Add ingredient'
          name='ingredient'
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredient}</ul>
    </main>
  );
}
