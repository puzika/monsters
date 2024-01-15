import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			name: 'Tolib',
			company: 'Google',
		};
	}

	changeName() {
		this.setState({ name: 'Tolibjon' });
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Hi {this.state.name}, I work at {this.state.company}</p>
					<button class="btn" onClick={this.changeName.bind(this)}>Change name</button>
				</header>
			</div>
		);
	}
}

export default App;
