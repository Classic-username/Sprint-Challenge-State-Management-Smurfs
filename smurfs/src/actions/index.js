import axios from 'axios'

export const ADD_SMURF = 'ADD_SMURF';
export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCEED = 'FETCH_SMURF_SUCCEED';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';

export const addSmurf = smurfName => {
    console.log(smurfName, 'in addSmurf in actions');
    return {
        type: ADD_SMURF,
        payload: smurfName
    }
}

export const getSmurfs = () => dispatch => {
    dispatch({type: FETCH_SMURF_START});
    axios
        .get('http://localhost:3333')
        .then( res => dispatch({type: FETCH_SMURF_SUCCEED, payload: res.data}))
        .catch(err => dispatch({type: FETCH_SMURF_FAIL, payload: err}))
}