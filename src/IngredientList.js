import React, {Component} from 'react';
import PropTypes from 'prop-types';

class IngredientList extends Component {
    static propTypes = {
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
    }
    render() {
        return (
            <ul>
                {this.props.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        );
    }
}

export default IngredientList