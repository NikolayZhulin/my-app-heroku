import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

type PropsType = {
	body: string
	id: number
	title: string
	userId: number
}

function App() {
	const [state, setState] = useState<Array<PropsType>>([])
	
	const deleteHandler = () => {
		setState([])
	}
	
	const showPostsHandler = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setState(json))
	}
	
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(json => setState(json))
	}, [])
	return (
		<div className="App">
			<button onClick={deleteHandler}>DELETE</button>
			<button onClick={showPostsHandler}>Show</button>
			<ul>
				{state.map(elem => {
					return (
						<li key={elem.id}>
							<span>{elem.title}</span>
						</li>
					)
				})}
			</ul>
		</div>
	);
}

export default App;
