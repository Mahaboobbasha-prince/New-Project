import React, { useState, useEffect } from 'react';
import TextEditor from './TextEditor';
import Item from './Item';

function OneBox() {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setData(data.slice(0, 10))); // Limit to 10 items for demo
    }, []);

    const handleDelete = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        }).then(() => {
            setData(data.filter(item => item.id !== id));
        });
    };

    const handleReply = (item) => {
        setSelectedItem(item);
    };

    const handleKeyDown = (event, item) => {
        if (event.key === 'D') {
            handleDelete(item.id);
        } else if (event.key === 'R') {
            handleReply(item);
        }
    };

    return (
        <div>
            <h2>OneBox</h2>
            <ul>
                {data.map(item => (
                    <Item 
                        key={item.id} 
                        item={item} 
                        onDelete={handleDelete} 
                        onReply={handleReply} 
                        onKeyDown={(e) => handleKeyDown(e, item)}
                    />
                ))}
            </ul>
            {selectedItem && <TextEditor item={selectedItem} />}
        </div>
    );
}

export default OneBox;