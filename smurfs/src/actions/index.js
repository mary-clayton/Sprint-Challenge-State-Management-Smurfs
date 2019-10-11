import axios from 'axios';
export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START'
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS'
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE'

export const ADDING_SMURFS_START = 'ADDING_SMURFS_START'
export const ADDING_SMURFS_SUCCESS = 'ADDING_SMURFS_SUCCESS'
export const ADDING_SMURFS_FAILURE = 'ADDING_SMURFS_FAILURE'

export const fetchSmurfs = () => dispatch => {
    dispatch({type: FETCHING_SMURFS_START})
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res)
        dispatch({
            type: FETCHING_SMURFS_SUCCESS,
            payload: res
        })
    })
    .catch(err => console.log(err))
}

export const addSmurf = smurf => dispatch => {
    dispatch({type: ADDING_SMURFS_START})
    axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
        console.log(res)
        dispatch({
            type: ADDING_SMURFS_SUCCESS,
            payload: res
        })
    })
    .catch(err => console.log(err))
}