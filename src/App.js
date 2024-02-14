import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/seach-box.component';
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
				<h1 className="app-title">Monsters Rolodex</h1>

				<SearchBox className='search-box' placeholder='search monsters' onChangeHandler={onSearchChange}></SearchBox>
				<CardList monsters={matches}></CardList>
			</div>
		);
	}
}

export default App;
