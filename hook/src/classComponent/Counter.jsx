import { Component } from "react";

class CounterApp extends  Component {
  constructor(props){
    super(props)
    this.state={
          count:0
    }
  }

  Inc =() =>{
       this.setState((prev) =>{
        return{
          count: prev.count + 1 
        }
       })
  }

  Dec =() =>{
    this.setState((prev) =>{
      return{
        count: prev.count - 1 
      }
     })
    
  }

    render(){
        return(
              <div style={{marginTop:"100px", paddingLeft:"1rem" , textAlign:"center"}}>
                <h1>Counter app with class component</h1><br />
                <h2>{this.state.count}</h2>
                <br />
                <button onClick={this.Inc} style={{padding:"0.5rem 1.5rem"}}>Increses</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.Dec} style={{padding:"0.5rem 1.5rem"}}>Decreses</button>
              </div>
        )
    }
}

export default CounterApp