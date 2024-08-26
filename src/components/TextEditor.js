import React, { useState } from 'react';

function TextEditor({ item }) {
    const [body, setBody] = useState('');

    const handleSave = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'email@example.com',
                to: 'recipient@example.com',
                subject: `Re: ${item.title}`,
                body: `<html>${body}</html>`,
            }),
        }).then(response => response.json())
          .then(data => console.log('Reply sent:', data));
    };

    return (
        <div>
            <h3>Reply to: {item.title}</h3>
            <textarea value={body} onChange={(e) => setBody(e.target.value)} />
            <button onClick={handleSave}>Save</button>
            <button>Variables</button>
        </div>
    );
}

export default TextEditor;