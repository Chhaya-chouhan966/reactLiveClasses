import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { id } = useParams();
    const [productDitail, setProductDetail]=useState({
        // id: " ",
        // title:"",
        // description:"",
        // image:"",
        // price:0,
        // category:""


    })
    useEffect( () =>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then( (res) => res.json())
        .then( (data) =>{
            console.log(data);
            setProductDetail(data)
        })
    },[id])

    return (
        <div style={{marginTop:"150px",textAlign:"center", margin:"3rem 2rem"}}>
            <h1>{productDitail.title}</h1>
            <h2 >{productDitail.category}</h2>
            <img src={productDitail.image} alt=""  width="300px" height="300px" style={{padding: "2rem, 1rem"}}/>
            <h3> only ${productDitail.price}</h3>
            <p>{productDitail.description}</p>
        </div>
    )
}

export default ProductDetail