import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './nav.css'
import { useDispatch, useSelector } from 'react-redux'
import { CountIncrement } from '../ReduxStore/ActionCreator'

const Cart = () => {
    const { id } = useParams()

    const [clicked, setClicked] = useState(true)

    const [cart, setCart] = useState({
        category: "",
        image: "",
        description: "",
        title: "",
        price: ""

    })
    const dispatch = useDispatch()


    let { value } = useSelector((countData) => {
        return countData;
    })

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCart(data)
            })
    }, [id])

    const navigate = useNavigate()

    const Remove = () => {
        setClicked(!clicked)
        if (value > 0) {
            value = 0
            dispatch(CountIncrement(value))
        }
        navigate(`/cart`)
    }

    // const Remove = () => {
    //         setClicked(clicked)
    //         if (value > 0) {
    //             value = 0
    //             dispatch(CountIncrement(value))
    //         }
    //         navigate(`/cart`)
    //     }
    


    return (
        <div className='cart'>
             
            {
               ( clicked ) ? (
                    <div className='singleCart'>
                        <h1 style={{ color: "green" }}>Shopping List</h1>
                        <h2>{cart.category}</h2>
                        <h3>{cart.title}</h3>
                        <img src={cart.image} alt={cart.category} style={{ border: "none", height: "350px", width: "300px" }} />
                        <p>{cart.description}</p>
                        <button style={{ backgroundColor: "yellow", padding: "0.5rem 1rem", border: "2px solid white" }}
                            onClick={() => Remove()} >Remove cart</button>
                    </div>
                ) : <h1 style={{ color: "red", margin: "150px" }}>Data Not Found</h1>
            }

            {/* {
                (!clicked && value === 0) ? <h1 style={{ color: "red", margin: "150px" }}>Data Not Found</h1>
                    : (
                        <div className='singleCart'>
                            <h2>{cart.category}</h2>
                            <h3>{cart.title}</h3>
                            <img src={cart.image} alt={cart.category} style={{ border: "none", height: "350px", width: "300px" }} />
                            <p>{cart.description}</p>
                            <button style={{ backgroundColor: "yellow", padding: "0.5rem 1rem", border: "2px solid white" }}
                                onClick={() => Remove()} >Remove cart</button>
                        </div>
                    )
            } */}



        </div>
    )
}

export default Cart