import React, { Component } from 'react'






 class Slot extends Component {
     state={
         subDescription:'',
         expand:true
     }

changeDescription =()=>
{
    this.state.expand ? (this.setState({subDescription:this.props.description,expand:false})) : 
    (this.setState({subDescription:(this.props.description).substring(0,100)+'...', expand:true}))

}
     
     componentDidMount()
     {
         this.setState({subDescription:(this.props.description).substring(0,100)+'...'
        })
     }
    render() {
        return (
            <div className='container'onClick={()=>this.changeDescription()}>
                <h2>Title:{this.props.title}({this.props.year})</h2>
                <p><b>Director:</b> {this.props.director}       <b>Producer:</b> {this.props.producer}</p>

                <p><b>Description:</b>{this.state.subDescription} </p>
                
            </div>
        )
    }
}
export default Slot