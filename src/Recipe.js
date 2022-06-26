import React from "react";
import "./App.css";

function Recipe({ recipe, index, handleDelete }) {
  const { name, cuisine, photo, ingredients, preparation } = recipe;

  const photoElement = <img src={photo} alt={name}></img>;

  return (
    <tr key={index}>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td>{photoElement}</td>
      <td className="content_td">
        <p>{ingredients}</p>
      </td>
      <td className="content_td">
        <p>{preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={() => handleDelete(index)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Recipe;
