import React, { Component } from 'react';
import {BtnPrimary, BtnSecondary} from './buttons.js';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import {TweenMax, Power2, autoAlpha, Elastic, Power3} from "gsap";

function FirstChild(props){
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
}

class Window extends Component {
    constructor(props){
        super(props)
    }
    
    componentWillEnter(cb){
        let window = document.querySelector(".modal .pop-up");
        TweenMax.to(window, 1, {
            autoAlpha: 1,
            ease: Elastic.easeOut.config(1, 0.3), 
            y: 100
        })
        cb();
    }
    
    componentWillLeave(cb){
        let window = document.querySelector(".modal .pop-up");
        TweenMax.to(window, .3, {
            autoAlpha: 0,
            ease: Power3.easeOut, 
            y: -100,
            onComplete: cb
        })
        
        
    }
    
    render(){
        return (
            <div className={`modal`}>
                
                <div className={`${this.props.props.windowName}-window pop-up`}>
                    
                    <div className="modal__title">
                        <span>{this.props.props.titleText}</span>
                        <span onClick={this.props.props.toggleDisplay}>&times;</span>
                    </div>
                    
                    <hr></hr>
                    
                    <div className="modal__input">

                        <div className="modal-input-1">
                            <div>{this.props.props.input1_text}</div>
                            <input type="text" placeholder={this.props.props.input1_placeholder} defaultValue={this.props.props.current_name}
                            ></input>
                        </div>

                        <div className="modal-input-2">
                            <div>{this.props.props.input2_text}</div>
                            <textarea placeholder={this.props.props.input2_placeholder}
                                defaultValue=
                            {this.props.props.current_ingredients}></textarea>
                        </div>

                    </div>
                    <hr></hr>
                    
                    <div className="modal__buttons">
                        <BtnPrimary 
                            toggleDisplay={this.props.props.toggleDisplay}
                            handleClick={this.props.props.handleClick_primary}
                            text={this.props.props.btn_primary_text}
                            index={this.props.props.index}
                            receive_input={true}
                            display={this.props.props.display}
                            ></BtnPrimary>
                        <BtnSecondary 
                            toggleDisplay={this.props.props.toggleDisplay}
                            handleClick={this.props.props.handleClick_Secondary}
                            text={this.props.props.btn_secondary_text}></BtnSecondary>
                    </div>
                </div>
            </div>
        )
    }
}

class Modal extends Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <TransitionGroup component={FirstChild}>
                {
                    this.props.display &&
                    <Window
                        props={this.props}
                        ></Window>
                }
            </TransitionGroup>
        )
    }
}

export default Modal;
