import React, { Component } from 'react';
import {TweenMax, Power2} from "gsap";
import {BtnPrimary, DeleteBtn} from './buttons.js';
import EditWindow from './editWindow.js';



function EditBtn(props){
    return (
        <div className="edit-btn" onClick={props.handleClick}>Edit</div>
    )
}

function IngredientList(props){
    return (
        <div className="ingredient-board__list">
            {props.ingredients.map((e,index) => {
                return <div key={index}>{e}</div>
            })}
        </div>
    )
}

function IngredientBoard(props){
    
    let style = {
        maxHeight: props.ingredientBoardOpened?"800px":"0px"
    }
    
    return (
        <div style={style} className={`item__ingredient-board ingredient-board`}>
            
            <div className="ingredient-board__title">Ingredients</div>
            
            <hr></hr>
            
            <IngredientList ingredients={props.ingredients}></IngredientList>
            
            <div className="item__btns">
                <DeleteBtn handleClick={props.deleteItem} index={props.index}></DeleteBtn>
                <BtnPrimary text="Edit" toggleDisplay={props.toggleEditWindow} index={props.index}></BtnPrimary>
            </div>
            
        </div>
    )
}

class Item extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            edit_window_opened: false,
            ingredient_board_opened: false
            
        };
        this.toggleEditWindow = this.toggleEditWindow.bind(this);
        this.toggleIngredientBoard = this.toggleIngredientBoard.bind(this);
    }
    
    toggleIngredientBoard(index){
        let opened = this.state.ingredient_board_opened;
        this.state.ingredient_board_opened = !opened;
        this.forceUpdate();
    }
    
    toggleEditWindow(){
        let opened = this.state.edit_window_opened;
        this.setState({
            edit_window_opened: !opened
        });
    }
    
    render(){
        let that = this;
        return (
            <div className="item-container">
                <div className="item">
                    <div className="item-name" onClick={this.toggleIngredientBoard}>{this.props.name}</div>
                </div>
                <IngredientBoard ingredients={this.props.ingredients}
                    index={this.props.index}
                    deleteItem={this.props.deleteItem}
                    toggleEditWindow={this.toggleEditWindow}
                    ingredientBoardOpened={this.state.ingredient_board_opened}>
                </IngredientBoard>
                <EditWindow display={this.state.edit_window_opened}
                        toggleEditWindow={this.toggleEditWindow}
                        editItem={this.props.editItem}
                        index={this.props.index}
                        current_ingredients = {this.props.ingredients}
                        current_name={this.props.name}
                        >
                </EditWindow>
            </div>
        )
    }
}

export default Item;