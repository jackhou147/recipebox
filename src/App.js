import React, { Component } from 'react';
import './App.css';
import Item from './Item.js';
import AddRecipeWindow from './addRecipeWindow.js';
import {BtnPrimary} from './buttons.js';

function AddRecipeBtn(props){
    return (
        <BtnPrimary text="Add Recipe" 
                    className="add-recipe-btn"
                    toggleDisplay={props.toggleDisplay}>
        </BtnPrimary>
    )
}


class App extends Component {
  
    constructor(props){
        super(props);
        
        this.state = {
            items: 
                typeof localStorage["recipeBook"]!== "undefined"?JSON.parse(localStorage["recipeBook"]):
                [
                    {
                        name: "pumpkinPie",
                        ingredients: [
                            "pumpkin puree",
                            "sweetened condensed milk",
                            "eggs",
                            "pumpkin pie spice",
                            "pie crust"
                        ],
                    },
                    {
                        name: "spaghetti",
                        ingredients: [
                            "noodles",
                            "tomato sauce",
                            "meatballs"
                        ],
                    },
                    {
                        name: "onionPie",
                        ingredients: [
                            "onion",
                            "pie crust",
                            "sounds yummy right?"
                        ],
                    },
            ]
            ,
            add_recipe_window_opened: false
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.toggleAddRecipeWindow = this.toggleAddRecipeWindow.bind(this);
        this.updateLocalStorage = this.updateLocalStorage.bind(this)
    }
    
    updateLocalStorage(){
        localStorage.setItem("recipeBook", JSON.stringify(this.state.items))
    }
    
    toggleAddRecipeWindow(){
        let opened = this.state.add_recipe_window_opened;
        this.setState({
            add_recipe_window_opened: !opened
        })
    }
    
    deleteItem(index){
        if(index > -1){
            this.state.items.splice(index,1);
        }
        this.forceUpdate();
        this.updateLocalStorage();
    }
    
    editItem(index,name, ingredients){
        if(name == ""){
            name = "untitled"
        }
        const items = this.state.items;
        items[index].name = name;
        console.log(ingredients);
        items[index].ingredients = ingredients;
        this.forceUpdate();
        this.updateLocalStorage();

    }
    
    addItem(index, name, ingredients) {
        if(name == ""){
            name = "untitled"
        }
        const items = this.state.items;
        let new_item = {
            name: name,
            ingredients: ingredients
        };
        items.push(new_item);
        this.forceUpdate();
        this.updateLocalStorage();
    }
    
    render(){
        let items = this.state.items;
        return (
            <div className="App">
                    <AddRecipeWindow
                        display={this.state.add_recipe_window_opened}
                        toggleDisplay={this.toggleAddRecipeWindow}
                        addItem={this.addItem}
                        handleClick_primary={this.addItem}
                    >
                    </AddRecipeWindow>
                
                    
                
                <div className="container">
                  {
                      items.map((item, index) => {
                              return <Item name={item.name}
                                       ingredients={item.ingredients}
                                       key={index}
                                       index={index}
                                       deleteItem={this.deleteItem}
                                       toggleEditWindow={this.toggleEditWindow}
                                       editItem={this.editItem}></Item>
                          
                      })
                  }
                </div>
                <AddRecipeBtn 
                    toggleDisplay={this.toggleAddRecipeWindow}
                ></AddRecipeBtn>
          </div>
        )
    }
}

export default App;
