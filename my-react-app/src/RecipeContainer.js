import React from 'react';
import Recipe from './Recipe'; // Import the Recipe component

const RecipeContainer = ({ recipes }) => {
  return (
    <div style={containerStyle}>
      {recipes.length === 0 ? (
        <p>No Recipes Found</p>
      ) : (
        recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))
      )}
    </div>
  );
};

// Style for the container
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#FFEDD5', // Light orange background
};

export default RecipeContainer;