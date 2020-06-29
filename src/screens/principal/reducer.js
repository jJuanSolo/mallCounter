import Actions from '../../redux/actionType';

const INITIAL_STATE = {
    counter: 0,
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case Actions.UPDATECOUNTER:
            return { ...state, counter: action.payload};
        case Actions.ERRORCOUNTER:
            return { ...state, counter: action.payload};
        case Actions.RESTARTCOUNTER:
            return { ...state, counter: 0};
        default:
            return state;
    }
};