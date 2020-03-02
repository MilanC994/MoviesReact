import {FETCH_MOVIES,FETCH_PEOPLE,PRINT_STATE} from './constActions'
import produce from 'immer'


const initialState = {
    movies:[],
    people:[]
}



const moviesReducer =(state=initialState,action)=>
{
    switch(action.type)
    {
        case FETCH_MOVIES:
        {    return   produce(state, draft=>{
            draft.movies = action.payload
          
        })
       }
       
       case FETCH_PEOPLE:
        {    return   produce(state, draft=>{
            draft.people = action.payload
          
        })
       }
        case PRINT_STATE:
        {   console.log('IZ PRINT STATE'+state.people[0].name)
            return state;
        }
        default: 
        {return state}
        }
}
export default moviesReducer