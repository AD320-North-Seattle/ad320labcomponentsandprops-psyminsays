import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <div style={recipeStyle}>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
    </div>
  );
};

// Style for individual recipe items
const recipeStyle = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
  margin: '10px',
  width: '300px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
};

export default Recipe;