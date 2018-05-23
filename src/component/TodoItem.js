import React, { Component } from 'react'

export default class TodoItem extends Comment{
    render(){
        const {todo}=this.props
        return(
            <li>
                <div className="view">
                <label>{todo.text}</label>
                </div>
                </li>
        )
    }
}
