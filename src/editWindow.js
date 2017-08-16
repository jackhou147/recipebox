import React, { Component } from 'react';
import Modal from './modal.js';


class EditWindow extends Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <Modal 
                display={this.props.display}
                windowName="edit"
                titleText="Edit Recipe"
                input1_text="Recipe"
                input1_placeholder="Recipe Name"
                input2_text="Ingredients"
                input2_placeholder="Enter Ingredients, Separated, By Commas"
                toggleDisplay={this.props.toggleEditWindow}
                handleClick_primary={this.props.editItem}
                btn_primary_text = "Edit Recipe"
                handleClick_Secondary={this.handleClick_Secondary}
                btn_secondary_text = "Close"
                index={this.props.index}
                current_ingredients={this.props.current_ingredients}
                current_name={this.props.current_name}
                >
            </Modal>
        )
    }
}



export default EditWindow;