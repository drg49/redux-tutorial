const counterReducer = (state = 0, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - action.payload
        default:
            return state;
    }
}

export default counterReducer