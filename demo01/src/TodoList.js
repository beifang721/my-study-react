import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem';
// import { CSSTransition } from 'react-transition-group';
export default class odoList extends Component {
  constructor(props) {
    super(props);
    // 当组件的state或者props发生改变的时候， render函数就会重新执行
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
      <Fragment>
        <label htmlFor="insertArea">输入内容</label>
        <input id="insertArea"
          value={this.state.inputValue}
          type="text"
          onChange={
            (e) => { 
              this.setState({ 
                inputValue: e.target.value 
              }) 
            }
          } />
        <button onClick={this.addClick.bind(this)}>add</button>
        <TodoItem 
          content={this.state.list} 
          delete={(index) => {
            const list = this.state.list;
            list.splice(index, 1)
            this.setState({
              list: list
            })
          }}>
        </TodoItem>
      </Fragment>
    )
  }
}
