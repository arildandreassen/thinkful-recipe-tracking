import React, { useState } from "react";
import "./App.css";

function RecipeCreate({ recipes, setRecipes }) {
  const defaultForm = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState(defaultForm);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes([...recipes, formData]);
    setFormData(defaultForm);
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                id="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
              ></input>
            </td>
            <td>
              <input
                name="cuisine"
                id="cuisine"
                value={formData.cuisine}
                placeholder="Cuisine"
                onChange={handleChange}
              ></input>
            </td>
            <td>
              <input
                name="photo"
                id="photo"
                value={formData.photo}
                placeholder="URL"
                onChange={handleChange}
              ></input>
            </td>
            <td>
              <textarea
                name="ingredients"
                id="ingredients"
                value={formData.ingredients}
                placeholder="Ingredients"
                onChange={handleChange}
              ></textarea>
            </td>
            <td>
              <textarea
                name="preparation"
                id="preparation"
                value={formData.preparation}
                placeholder="Preparation"
                onChange={handleChange}
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
