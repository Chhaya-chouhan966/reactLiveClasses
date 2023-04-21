import React, { useEffect, useState } from 'react'
import './nav.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ActionCreator,{CountIncrement}from '../ReduxStore/ActionCreator';

const Product = () => {
  let [products, setProducts] = useState(0);
  const { product } = useSelector((storedata) => {
    return storedata;
  })

  const dispatch = useDispatch()
  useEffect(() => {
    if (product.length === 0) {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
          // setProduct(data)
          dispatch(ActionCreator(data))
        })
    }
  })
  
  const IsCount=() =>{
    setProducts(products+=1)
    dispatch(CountIncrement(products))
  }
 
  

  return (
    <div style={{ margin: " 20px 80px" }}>
      <h2 style={{ color: "green" }}>Product Componenet</h2>
      <p style={{ marginTop: "30px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vitae ut repellendus reiciendis officiis aperiam iusto delectus perspiciatis. Numquam, molestiae molestias. Hic saepe sapiente, sint optio eligendi quaerat facilis veniam, quae quasi molestiae repellat ex repellendus doloribus quibusdam est tenetur distinctio cum nihil? Tempora doloremque odio animi deserunt quod nihil dicta ad officiis ratione quia, tenetur suscipit earum eveniet et deleniti voluptatem ducimus laborum fuga, debitis consequatur libero temporibus! Minus eaque suscipit, quo quia deserunt incidunt vero iste! Minus velit nihil deleniti quis similique! Non quod possimus repudiandae voluptatem? Accusantium optio voluptatibus provident quae cum fuga. Ipsum veritatis praesentium consequuntur?</p>

      <div className="allProduct">
        {
          product.map((ele) => {
            return (
              <div key={ele.id} className="singleProduct">
                <img src={ele.image} alt="" width="250px" height="300px" />
                <h3>{ele.title}</h3>
                <p>${ele.price}</p>
                <Link to={`/cart/${ele.id}`}><button onClick={() => IsCount()}>Add to Cart</button></Link>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default Product