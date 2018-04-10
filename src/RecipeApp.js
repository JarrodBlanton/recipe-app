import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe'
import NavBar from './NavBar'
// import PropTypes from 'prop-types';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="all-recipes">
          {this.props.recipes.map((r, index) => (
            <Recipe
              key={index}
              title={r.title}
              ingredients={r.ingredients}
              instructions={r.instructions}
              img= {r.img}
              />
          ))}
        </div>
      </div>
    );
  }
}

RecipeApp.defaultProps = {
  recipes: [
    {
      title: 'Spaghetti',
      ingredients: ['flour', 'water'],
      instructions: 'Open jar of spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce.',
      img: 'spagghet.jpg'
    }, 
    {
      title: 'Milkshake',
      ingredients: ['2 scoops Ice cream', '8 ounces milk'],
      instructions: 'Combine ice cream and milk. Blend until creamy.',
      img: 'milkshake.jpg'
    },
    {
      title: 'Avocado Toast',
      ingredients: ['2 slices of bread', '1 avocado', '1 tbsp olive oil', '1 pinch of salt', 'pepper'],
      instructions: 'Toast bread. Slice avocado and spread on bread. Add salt, oil, and pepper to taste.',
      img:'avocado.jpeg'
    }
  ]
}
export default RecipeApp;
