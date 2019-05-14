import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
import store from '../store';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <div>
          <Input
            value={this.state.inputValue}
            placeholder="todo info"
            style={{ width: '300px', marginRight: '10px' }}
            onChange={this.handleChangeInput}
          />
          <Button type="primary">提交</Button>
        </div>
        <List
          size="small"
          style={{ width: '400px', marginTop: '10px' }}
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    )
  }

  handleChangeInput(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
}
