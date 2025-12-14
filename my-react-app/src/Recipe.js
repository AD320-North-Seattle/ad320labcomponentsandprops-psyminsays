import React from 'react';

const Recipe = ({ recipes }) => {
  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No Recipes Found</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Recipe;