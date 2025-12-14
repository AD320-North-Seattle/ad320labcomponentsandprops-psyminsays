import React, { useEffect, useState } from 'react';

const RecipeContainer = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      async function fetchRecipes() {
        try {
          const response = await fetch('https://api.example.com/recipes'); // Replace with your API endpoint
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setRecipes(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }

      fetchRecipes();
    }, []);

    return (
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && <WrappedComponent recipes={recipes} {...props} />}
      </div>
    );
  };
};

export default RecipeContainer;