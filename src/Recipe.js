import React, { Component } from 'react';
import './Recipe.css';
import IngredientList from './IngredientList';

class Recipe extends Component {
    render() {
        const {title, img, instructions} = this.props;
        return ( 
            <div className='recipe'>
                <div className='recipe-img'>
                    <img src={img} alt={title} />
                </div>
                <div className='recipe-content'>
                    <h3>{title}</h3>
                    <h4>Ingredients:</h4>
                    <IngredientList ingredients= {this.props.ingredients}/>
                    <h4>Instructions:</h4>
                    <p>{instructions}</p>
                </div>    
            </div>
        );
    }
}

export default Recipe