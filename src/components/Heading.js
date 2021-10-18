import { Component } from "react";
import headingstyle from "./Heading.module.css";

export default class Heading extends Component {
    render() {
        return (
            <h1 className={headingstyle.heading}>COMPONENTS EXCERCISE</h1>
        )
    }
}