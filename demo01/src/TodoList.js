import React, { Component } from 'react'
import TodoItem from './TodoItem';

export default class odoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        'aaaaa',
        'bbbbb'
      ],
      inputValue: ''
    }
  }
  addClick() {
    if (this.state.inputValue.trim()) {
      this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
      })
    } else {
      alert("输入不能为空")
    }
  }
  render() {
    return (
      <div>
        <label htmlFor="insertArea">ddd</label>
        <input id="insertArea" value={this.state.inputValue} type="text" onChange={(e) => { this.setState({ inputValue: e.target.value }) }} />
        <button onClick={this.addClick.bind(this)}>add</button>
        <TodoItem content={this.state.list} delete={(index) => {
          const list = this.state.list;
          list.splice(index, 1)
          this.setState({
            list: list
          })
        }}></TodoItem>
      </div>
    )
  }
}
