import React from 'react'
import './style.css'


const Footer = ({ allData }) => {
    return (
        <div className='footer'>
            {
                allData.length > 0 ? <div>
 
                    <table>
                        <thead>
                            <tr style={{backgroundColor:"black", color:"white"}}>
                                <th style={{ padding:"0.5rem 0", textAlign:"start"}}>Image</th>
                                <th style={{ padding:"0.5rem 0", textAlign:"start"}}>Name</th>
                                <th style={{ padding:"0.5rem 0", textAlign:"start"}}>Email</th>
                                <th style={{ padding:"0.5rem 0", textAlign:"start"}}>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allData.map((ele, index) => {
                                    return <tr key={index}>
                                        <td><img src={ele.picture.medium} alt="" /></td>
                                        <td>{ele.name.first}</td>
                                        <td>{ele.email}</td>
                                        <td>{ele.gender}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>

                </div> : <h2 style={{ color: "red", marginTop: "100px", textAlign: "center" }}>Data Not Found</h2>
            }
        </div>
    )
}

export default Footer

