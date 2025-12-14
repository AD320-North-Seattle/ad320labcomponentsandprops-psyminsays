import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <div style={recipeStyle}>
      <h3 style={titleStyle}>{recipe.title}</h3>
      <p>{recipe.description}</p>
    </div>
  );
};

// Style for individual recipe items
const recipeStyle = {
  border: '2px solid #FF5722', // Dark orange border
  borderRadius: '5px',
  padding: '10px',
  margin: '10px',
  width: '300px',
  backgroundColor: '#FFF3E0', // Soft yellow background
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
};

// Style for the recipe title
const titleStyle = {
  color: '#D84315', // A strong red-orange color for the title
};

export default Recipe;