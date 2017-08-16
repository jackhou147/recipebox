import React, { Component } from 'react';
import Modal from './modal.js';
import TransitionGroup from 'react-transition-group/TransitionGroup';


class AddRecipeWindow extends Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        console.log(this.props.handleClick_primary)
        return (
            <Modal 
                display={this.props.display}
                windowName="add"
                titleText="Add Recipe"
                input1_text="Recipe"
                input1_placeholder="Recipe Name"
                input2_text="Ingredients"
                input2_placeholder="Enter Ingredients, Separated, By Commas"
                toggleDisplay={this.props.toggleDisplay}
                handleClick_primary={this.props.handleClick_primary}
                btn_primary_text = "Add Recipe"
                btn_secondary_text = "Close"
                >
            </Modal>
        )
    }
}

export default AddRecipeWindow;