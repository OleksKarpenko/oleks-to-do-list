import React from "react";

import classes from './ToDoItem.module.css';

const ToDoItem = (props) => {

    const removeProduct = () => {
        props.remove(props.itemId);
    }

    return (
        <div className={classes["expense-item__description"]}>
            <div>
                <input id={props.itemId} type="checkbox" />
                <label htmlFor={props.itemId}>{props.title}</label>
            </div>
            <button className={classes["remove-btn"]} type="button" onClick={removeProduct}>Remove</button>
        </div>
    )
}

export default ToDoItem;