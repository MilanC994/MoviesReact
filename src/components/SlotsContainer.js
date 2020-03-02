import React, { Component } from 'react'
import {fetchMovies,fetchPeople,printState} from '../redux/actions'
import {connect} from 'react-redux'
import Slot from './Slot'


 class SlotsContainer extends Component {
    
    componentDidMount() {
        this.props.fetchPeople();
        this.props.fetchMovies();
        
        
      }
    
    render() {
        
        return (
            <div className="slotsContainer">
                
                {this.props.movies.map( movie=><Slot key={movie.id} url={movie.url} people ={this.props.people} title={movie.title} director={movie.director}   producer={movie.producer} description ={movie.description} year ={movie.release_date} />)}
            

            </div>
        )
    }
}

const mapStateToProps=state=>
{
    return{
        movies:state.movies,
        people:state.people
    }
}
const mapDispatchToProps=dispatch=>
{
    return{
        fetchMovies:()=>dispatch(fetchMovies()),
        fetchPeople:()=>dispatch(fetchPeople()),
        printState:()=>dispatch(printState())
    }
}

export default connect (mapStateToProps,mapDispatchToProps) ( SlotsContainer)
