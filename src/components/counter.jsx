import React, { Component } from 'react';
 class Counter extends Component {
   

    // handleIncrement= () =>{
    //     this.setState({value:this.state.value+1})
    // };
   
    render() { 
        return (
        <div>          
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>+</button>{"  "}
            <button onClick={() => this.props.onDecrement(this.props.counter)} className='btn btn-secondary btn-sm'>-</button>
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            
        </div>
        );
    }
    formatCount(){
        const {value}=this.props.counter;
        return value===0 ? "Zero": value;
    }

     getBadgeClasses() {
         let classes = "badge m-2 badge-";
         classes += this.props.counter.value === 0 ? "warning" : "primary";
         return classes;
     }
}

 
export default Counter;