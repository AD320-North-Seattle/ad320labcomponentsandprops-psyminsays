import React from 'react';
import Recipe from './Recipe'; // Import the Recipe component

const RecipeContainer = ({ recipes }) => {
  return (
    <div style={containerStyle}>
      {recipes.length === 0 ? (
        <p>No Recipes Found</p>
      ) : (
        recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} /> // Pass individual recipe as prop
        ))
      )}
    </div>
  );
};

// Style for the container (you can customize this)
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#f4f4f4',
};

export default RecipeContainer;