const defaultState = {
    inputValue: '123',
    list: ['aa']
};
export default (state = defaultState, action) => {
    if(action.type === "change_input_value"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    console.log(state,action);
    return state;
}