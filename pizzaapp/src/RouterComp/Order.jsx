import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import '../Style/order.css'


const Order = () => {
    const { id } = useParams()

    const { dessert } = useSelector((storedata) => {
        return storedata
    })
    const selectedItem = dessert.find((ele) => ele.id === parseInt(id));
   
    const navigate=useNavigate();
    const QuickBtnFunc =(id) =>{
        navigate(`/quick/${id}`)
    }

    return (
        <div className='order'>
            {selectedItem && (
                <div className='orderSingleItemDiv' >
                    <p className='discount'>-15%</p>
                    <img src={selectedItem.linkImagen} alt="" />
                    <h2>{selectedItem.descripcion}</h2>
                    <p style={{ color: "orange", fontSize: "1.4rem" }}>
                        <i className="bi bi-star"></i>&nbsp;&nbsp;
                        <i className="bi bi-star"></i>&nbsp;&nbsp;
                        <i className="bi bi-star"></i>&nbsp;&nbsp;
                        <i className="bi bi-star"></i>
                    </p>
                    <h3><span style={{ textDecoration: "line-through", color: "whitesmoke" }}>$287</span>&nbsp;&nbsp;&nbsp;&nbsp;${selectedItem.precio}</h3>
                    <div className="singleItemButton">
                        <button className='addCartBtn'>ADD TO CART</button>
                        <Link to={`/quick/${selectedItem.id}`}>
                            <button onClick={() => QuickBtnFunc(`${selectedItem.id}`)} className='quickViewBtn'>QUICK VIEW</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Order