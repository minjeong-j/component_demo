// 함수형, 클래스형 버전 포함
// src/components/Greeting.js

// 함수형 컴포넌트
/*
function Greeting() {
    return <h1>Hello, React!!!</h1>;
}

export default Greeting;
*/

// 클래스형 컴포넌트
import React, { Component } from 'react';

class Greeting extends Component {
    render() {
        return <h1>Hello, React!</h1>;
    }
}

export default Greeting;