import React, { Component } from "react";
import style from './Button.module.css';

export default class Button extends Component {

    render() {
        return (
            <div>
                <button className={style.buttonstyle}>Button</button>
            </div>
        )
    }
}