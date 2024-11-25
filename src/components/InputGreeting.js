// src/components/InputGreeting.js
import React, { useState } from 'react';

function InputGreeting() {
    const [name, setName] = useState('');

    return (
        <div>
            <input
            type="text"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <h1>Hello, {name}!</h1>
        </div>
    );
}

export default InputGreeting;