import Actions from '../../redux/actionType';

const INITIAL_STATE = {
    counter: 0,
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case Actions.INCREMENT:
            return { ...state, counter: action.payload};
        case Actions.DECREMENT:
            return {...state, counter: action.payload};
        default:
            return state;
    }
};