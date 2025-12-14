import React from 'react';
import RecipeContainer from './RecipeContainer';
import Recipe from './Recipe';
import recipes from './data'; // Import the recipe data

function App() {
  return (
    <>
      <h1>My Recipe App</h1>
      {/** Pass Recipe as the wrapped component to RecipeContainer **/}
      <RecipeContainer WrappedComponent={Recipe} recipes={recipes} />
    </>
  );
}

export default App;