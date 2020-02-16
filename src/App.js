import React, { Component } from 'react';
import './App.css';
import Stopwatch from './Stopwatch';

class App extends Component{
 constructor(){
   super()
   this.state={
     count:100,
   }
 }

 increment(){
   this.setState(
     {
       count:this.state.count+1
     }
   );
 };

 decrement(){
   this.setState(
     {
    count:this.state.count-1
     }
   );
 };

 reset(){
   this.setState(
     {
       count:0
     }
   )
 }

 render(){
    return(
        <div style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
      }}>  
            <Stopwatch/>
            <h1>Current Count :{this.state.count}</h1>
            <button className="inc"  onClick={(e)=>this.increment(e)}>Increment!</button>
            <button  className="dec" onClick={(e)=>this.decrement(e)}>Decrement!</button>
            <button className="reset" onClick={(e)=>this.reset(e)}>Reset!</button>
            
        </div>

    );
 }




}

export default App;
