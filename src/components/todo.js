import React from 'react';
import  propTypes from 'prop-types';

const Todo=({onClick,completed,text})=>(
    <li onClick={onClick} style={{textDecoration:completed?'line-through':'none'}}>
    {text}
    </li>
)
Todo.propTypes={
    onClick:propTypes.func.isRequire,
    completed:propTypes.bool.isRequired,
    text:propTypes.string.isRequired
}
export default Todo;