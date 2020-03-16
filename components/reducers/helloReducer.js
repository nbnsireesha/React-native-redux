import {PRESSED_HELLO_BUTTON}  from '../actions/types'
const initialState = {
    helloText: "Hello",
    pressButton:false
};

export default (state = initialState, action) => {
    switch(action.type){
        case PRESSED_HELLO_BUTTON:
            return {pressButton:true, helloText: 'You pressed a button'}
        default:
            return state;
    }
}