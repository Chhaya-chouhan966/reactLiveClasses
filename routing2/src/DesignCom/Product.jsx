import React, { useContext, useEffect, useState } from 'react'
import './nav.css'
import { Link } from 'react-router-dom';
import { context } from './Contex';

const Product = () => {
    const {data,setData}=useContext(context)
    const [product, setProduct] = useState("");


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
            })
    }, [])

    return (
        <div style={{ padding: "1rem 1rem" }}>
            <h1 style={{ color: "red", padding: "1rem 8rem" }}>Product  </h1>
            {/* <p style={{ padding: "1rem 1rem" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore amet, maxime non corrupti maiores delectus dolorem culpa totam perferendis magnam minima, ipsum quo enim esse eos similique omnis. Ab eius qui sed, natus repellendus eligendi est, nam fugiat quas quos omnis voluptate iure asperiores architecto laudantium assumenda inventore placeat blanditiis illo atque vero accusamus! Optio dolorum tempora magnam soluta dolores neque voluptas molestiae officiis omnis laudantium nesciunt iure rerum esse voluptatem earum voluptates, illo enim commodi molestias doloribus excepturi quibusdam. Nemo, voluptate. Dolores cumque commodi sint, earum asperiores assumenda obcaecati consequatur perferendis iste cum quibusdam eius praesentium non eveniet illo?</p> */}

            {
                product.length > 0 ? <div className='ProductContainer'>

                    {
                        product.map((ele) => {
                            return (
                                <div className='productCart'>
                                    <img src={ele.image} alt="" width="200px" height="250px"/>
                                    <h3>{ele.title}</h3>
                                    <p>${ele.price}</p>
                                    <Link to={`/addtocart/${ele.id}`}><button onClick={() =>setData(data+1)}>Show Product</button></Link>
                                    
                                </div>
                                
                            );
                        })
                    }


                </div>

                    : (<><h2 style={{ color: "red", textAlign: "center", marginTop: "150px" }}>Data Not Found</h2></>
                    )
            }

        </div>


    )
}

export default Product;