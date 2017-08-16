import React, { Component } from 'react';

function BtnPrimary(props){ //Blue background
    function handleClick(){
        props.toggleDisplay();
        if(props.receive_input) {
            let name = document.querySelector("input").value,
                ingredients = [];
            document.querySelector("textarea").value.split(",").map(el => {
                ingredients.push(el)
            });
            props.handleClick(props.index, name, ingredients)
        }
    }
    return (
        <div className={`btn btn-primary ${props.className?props.className:""}`} onClick={handleClick}>
            {props.text}
        </div>
    )
}

function BtnSecondary(props) {
    return (
        <div className={`btn btn-secondary`} onClick={props.toggleDisplay}>
            {props.text}
        </div>
    )
}

function DeleteBtn(props){
    return (
        <div className="delete-btn" onClick={function(){props.handleClick(props.index)}}>Delete</div>
    )
}



export {BtnPrimary, BtnSecondary, DeleteBtn}