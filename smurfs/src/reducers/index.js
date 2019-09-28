import {FETCH_SMURF_SUCCEED, FETCH_SMURF_START, FETCH_SMURF_FAIL} from '../actions'

const initialState = { 
    smurf: {
        name: 'Brainey', 
        age: 200, 
        height: '5cm', 
        id: 0
    },
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
            
        default: return state;
    }
}