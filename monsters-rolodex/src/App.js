import React from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    .then(users => this.setState({ monsters: users }));
  }

  render() {
    const {monsters, searchfield} = this.state;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    
    return (
      <div className="App">
        <SearchBox 
          placeholder="search monsters"
          handleChange={e => this.setState({searchfield: e.target.value})}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
