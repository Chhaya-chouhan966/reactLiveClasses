
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './style.css'

const Product = () => {
    const [state, setState] = useState([])
    const [product, setProduct] = useState(false)
    useEffect(() => {
        if (product) {
            fetch(`https://fakestoreapi.com/products`)
                .then((res) => res.json())
                .then((data) => {
                    setState(data)
                })
        }
        
    }, [product])
    
    const ProductDetails = () => {
        if (product) {
            setState([])
        }else{
            setProduct(true)
        }
    }

    return (
        <div style={{ padding: "0.5rem 1rem" }}>
            <h2 style={{ color: "cornflowerblue" }}>Product Details</h2>
            <p style={{ color: "gray" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam quisquam facere at hic ipsa qui, assumenda, rerum alias quasi dolor praesentium, autem soluta repudiandae. Necessitatibus dolore aliquid accusantium assumenda eligendi!</p>
            <button onClick={ProductDetails}> {product ? 'Remove Data' : 'Add Data'}</button>
            {
                state.length > 0 ? <div className='container'>
                    {
                        state.map((ele) => {
                            
                            return <div key={ele.id} className='product'>
                                <img src={ele.image} alt="" width="200px" height="200px" />
                                <h3>{ele.title}</h3>
                                <p>${ele.price}</p>
                                <button>product</button>
                            </div>
                        })
                    }
                </div> : <h2 style={{ color: "red", textAlign: "center", marginTop: "3rem" }}>Data Not Found</h2>
            }
        </div>
    )
}

export default Product