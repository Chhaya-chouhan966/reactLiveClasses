import { Component } from "react";

class ApiCom extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    userData = () => {
        fetch(`https://randomuser.me/api/?results=20`)
            .then(res => res.json())
            .then((apiData) => {
                this.setState({
                    data: apiData.results
                })
            })
    }
    render() {
        { console.log(this.state) }
        return (
            <div style={{ marginTop: "30px", paddingLeft: "1rem" }}>
                <h2>Class Componenet</h2>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti minima saepe aliquid ad nesciunt velit voluptatem repellendus iure, necessitatibus cumque a quasi vel harum tempora repellat omnis numquam at quam! Assumenda, quo! Similique, perferendis esse vitae harum tempora quo eum ratione aliquam, accusantium blanditiis ex rerum provident amet odit dignissimos est fugiat? Quis ratione mollitia in similique cupiditate provident labore, unde, tempore nihil doloribus quos. Alias voluptatibus, sunt maxime explicabo tenetur, tempore quidem deserunt at in veritatis quisquam, ad qui inventore ab vero autem reiciendis neque consectetur! Aspernatur aperiam eum labore totam modi similique sunt nostrum deleniti accusamus quisquam.</p>
                <br />
                <button onClick={this.userData}>SetState</button><br />
                <br />
                <hr />
                {
                    this.state.data.length > 0 ? <div>
                        <table style={{ margin:"50px 0", textAlign:"center", width:"100%"}}>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>UserName</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.data.map((ele,index) =>{
                                        return <tr key={index}>
                                            <td><img src={ele.picture.medium} alt="" /></td>
                                            <td>{ele.name.first}</td>
                                            <td>{ele.email}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div> : <h1 style={{ margin:"150px", textAlign:"center", color:"red"}}>Data not found</h1>
                }
            </div>
        )
    }
}

export default ApiCom