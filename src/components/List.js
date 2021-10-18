import React, { Component } from "react";
import style from "./List.module.css";

export default class List extends Component {
    render() {
    return(<div className={style.listcontainer}>
        <ul>
            <li className={style.listitem}>tea</li>
            <li className= {style.listitem}>coffee</li>
            <li className= {style.listitem}>beer</li>
        </ul>
    </div>)
    }
}