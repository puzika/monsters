import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ monsters: users }));
	}

	onSearchChange = (event) => {
		const target = event.target.value.toLowerCase();
		this.setState({ searchField: target });
	}

	render() {
		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;

		const matches = monsters.filter(current => current.name.toLowerCase().includes(searchField));

		return (
			<div className='App'>
				<input className='search-box' type='search' placeholder='search monsters' onChange={onSearchChange}></input>
				{
					matches.map(monster => {
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
