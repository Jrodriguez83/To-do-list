import React, { Component } from 'react';
import './App.css'
import ItemsList from './components/ItemsList';
import TextBox from './components/TextBox';

class App extends Component {

  constructor() {
    super();
    this.state = {
      items: [],
      value: ''
    }
  }

  addItem = () => {
    if(this.state.value !== '')
    this.state.items.push(this.state.value)

    this.setState({ value: '' });
  }

  deleteItem = (index) => {
    this.state.items.splice(index, 1);
    this.setState({});
  }

  onChangeText = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const { items, value, } = this.state;
    return (
      <div >
        <h1 className='title'>Shopping List</h1>
        <TextBox addItem={this.addItem} value={value} onChangeText={this.onChangeText} />
        <ItemsList items={items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
