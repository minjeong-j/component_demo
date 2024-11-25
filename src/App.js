import './App.css';
import React from 'react';
// import Greeting from './components/Greeting';
// import Counter from './components/Counter';
import InputGreeting from './components/InputGreeting';

function App() {

  return <InputGreeting />;

  // State 예제
  // return <Counter />;

  // Props 예제 
	// return <Greeting name="Minjeong" />;
}

// 함수형 컴포넌트, 클래스형 컴포넌트 사용
/*
function App() {
	return(
    	<div>
        	<Greeting />
        </div>
    );
}
*/

export default App;