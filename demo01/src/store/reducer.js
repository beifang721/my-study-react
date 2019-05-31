const defaultState = {
  inputValue: '123',
  list: ['aa']
};
export default (state = defaultState, action) => {
  if (action.type === "change_input_value") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === "add_todo_item") {
    const newState = JSON.parse(JSON.stringify(state));
    console.log(newState);
    if (newState.inputValue.trim()) {
      newState.list = [...state.list, newState.inputValue];
      newState.inputValue = '';
      return newState;
    }else {
      alert('不能为空')
    }
  }
  console.log(state, action);
  return state;
}