import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ monsters: users }));
	}

	render() {
		return (
			<div className='App'>
				<input className='search-box' type='search' placeholder='search monsters' onChange={
					(event) => {
						console.log(event);
					}
				}></input>
				{
					this.state.monsters.map(monster => {
						return (
							<h1 key={monster.id}>{monster.name}</h1>
						);
					})
				}
			</div>
		);
	}
}

export default App;
