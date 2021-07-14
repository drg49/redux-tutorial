//THESE ARE YOUR ACTIONS, THEY EXPLAIN WHAT THE FUNCTIONS WILL DO

export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = (num) => {
    return {
        type: 'DECREMENT',
        payload: num
    }
}