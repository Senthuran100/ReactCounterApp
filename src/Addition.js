import React,{ Component } from 'react';


class Addition extends Component{
    constructor(props){
        super(props);
        this.state={number1:0,
                    number2:0,
                    sum:0};
    this.handlenum1Change = this.handlenum1Change.bind(this);
    this.handlenum2Change = this.handlenum2Change.bind(this);
    }
    handlenum1Change (evt) {
        console.log(evt.target.value);
        this.setState({ number1: Number(evt.target.value) });
      }
      handlenum2Change(evt) {
        console.log(typeof evt.target.value);
        this.setState({ number2: Number(evt.target.value) });
      }

    add=()=>{
        this.setState({sum:this.state.number1+this.state.number2})
    }
   
    render(){
        return(
        <div>
            <h1>Addition</h1>
            <input type="text" name ="number1" onChange={this.handlenum1Change}></input>
            <label> <b>+</b> </label>
            <input type="text" name="numeber2" onChange={this.handlenum2Change}></input>
            <button onClick={this.add}> <span> &nbsp;  &nbsp;</span> = <span> &nbsp;  &nbsp;</span></button>
            <input type="text" name="sum" value={this.state.sum}></input>
        </div>
    );

    }
}

export default Addition;