import { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list';
import {SearchBox} from './components/search-box/search-box';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({monsters: json}))
  }
  // Performance: Move anonymous func out of the render.
  onSearchChange = e => {
    const searchField = e.target.value.toLowerCase();

    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className='App'>
        <h1> Monster Rolodex </h1>
        <SearchBox
          placeholder='Type Monster'
          handleChange={onSearchChange}
        />
        <CardList
          monsters={filteredMonsters}
        />
      </div>
    );
  }
}

export default App;
