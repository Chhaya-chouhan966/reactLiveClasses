import { Component } from "react";

class BasicClassComp extends  Component {
 constructor(props){
    super(props)
    this.state={
      name:"tHis is my State data"
    }
  }

  UpdateState = () =>{
     this.setState({
       name:"setState function Update"
     })
  }

    render(){
        return(
              <div style={{marginTop:"30px", paddingLeft:"1rem"}}>
                <h2>Class Componenet</h2>
                <br />
                <h3>{this.props.data}</h3>
                <br />
                <h4>{this.state.name}</h4>
                <br />
                <button onClick={this.UpdateState}>SetState</button><br />
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti minima saepe aliquid ad nesciunt velit voluptatem repellendus iure, necessitatibus cumque a quasi vel harum tempora repellat omnis numquam at quam! Assumenda, quo! Similique, perferendis esse vitae harum tempora quo eum ratione aliquam, accusantium blanditiis ex rerum provident amet odit dignissimos est fugiat? Quis ratione mollitia in similique cupiditate provident labore, unde, tempore nihil doloribus quos. Alias voluptatibus, sunt maxime explicabo tenetur, tempore quidem deserunt at in veritatis quisquam, ad qui inventore ab vero autem reiciendis neque consectetur! Aspernatur aperiam eum labore totam modi similique sunt nostrum deleniti accusamus quisquam.</p>
              </div>
        )
    }
}

export default BasicClassComp