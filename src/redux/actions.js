import {FETCH_MOVIES,FETCH_PEOPLE,PRINT_STATE} from './constActions'
import axios from 'axios'

export const fetchMovies = ()=>
{
    return (dispatch) => axios.get("https://ghibliapi.herokuapp.com/films")
    .then(response => {
         dispatch({type: FETCH_MOVIES, 
            payload: response.data});
    })
}
export const fetchPeople = ()=>
{
    return (dispatch) => axios.get("https://ghibliapi.herokuapp.com/people")
    .then(response => {
         dispatch({type: FETCH_PEOPLE, 
            payload: response.data});
    })
}

export const printState=()=>
{
    return{
        type:PRINT_STATE
    }
}