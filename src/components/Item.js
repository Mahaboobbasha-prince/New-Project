import React from 'react';

function Item({ item, onDelete, onReply, onKeyDown }) {
    return (
        <li 
            tabIndex="0" 
            onKeyDown={onKeyDown} 
            style={{ marginBottom: '10px' }}
        >
            {item.title}
            <button onClick={() => onDelete(item.id)}>Delete</button>
            <button onClick={() => onReply(item)}>Reply</button>
        </li>
    );
}

export default Item;