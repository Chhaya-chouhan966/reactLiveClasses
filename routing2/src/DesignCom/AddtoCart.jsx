import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const AddtoCart = () => {
    const { id } = useParams()

    const [cart, setCart] = useState(
        {
        title: "",
        image: "",
        category: "",
        description: "",
        carts: " "
    })
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCart(data)
                console.log(data);
            })
    }, [id])

    return (
        <div>
            <div style={{ padding: "1rem 1rem", textAlign: "center", marginTop: "20px" }}>
                <h1 style={{ color: "blue", padding: "1rem 1rem" }}>AddtoCart Own Shopping </h1>
                {/* <p style={{ padding: "1rem 1rem" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore amet, maxime non corrupti maiores delectus dolorem culpa totam perferendis magnam minima, ipsum quo enim esse eos similique omnis. Ab eius qui sed, natus repellendus eligendi est, nam fugiat quas quos omnis voluptate iure asperiores architecto laudantium assumenda inventore placeat blanditiis illo atque vero accusamus! Optio dolorum tempora magnam soluta dolores neque voluptas molestiae officiis omnis laudantium nesciunt iure rerum esse voluptatem earum voluptates, illo enim commodi molestias doloribus excepturi quibusdam. Nemo, voluptate. Dolores cumque commodi sint, earum asperiores assumenda obcaecati consequatur perferendis iste cum quibusdam eius praesentium non eveniet illo?</p> */}
                <h2>{cart.category}</h2>
                <img src={cart.image} alt="" width="250px" height="300px" />
                <p>${cart.price}</p>
                <h3>{cart.description}</h3>
                <button onClick={() => setCart("")}>Remove Cart</button>
            </div>
        </div>
    );

}

export default AddtoCart;