import React, { useEffect, useState } from 'react'
import './product.css'
import { Link } from 'react-router-dom';

const Product = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setProduct(data)
            })
    }, [])
    return (
        <div style={{padding: "2rem 3rem"}}>
            <h2 style={{ color: "red", padding: "2rem 0", fontSize: "2rem" }}>Product Component</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ipsa praesentium fugit quidem accusamus nisi, blanditiis explicabo facere pariatur ab consectetur, id inventore quo itaque commodi recusandae deleniti magni quis beatae nihil vero, in voluptates error unde. Iste facere illum in voluptatibus? Dolore voluptas libero, eveniet rerum molestias earum maxime perferendis nemo nisi! Porro mollitia necessitatibus voluptatibus id expedita repudiandae excepturi nesciunt, repellat voluptate, culpa, atque ratione! Culpa facere enim voluptatum vel obcaecati doloribus praesentium sed illo corrupti repellendus perferendis ut possimus ex, numquam quisquam consequatur! Odit consectetur aut quos vel reprehenderit. Doloribus illo saepe atque est, tempora reprehenderit aperiam. Tempore quam minima eius iste velit hic. Illum, omnis placeat ad dolorem distinctio accusamus animi inventore laudantium maiores quisquam, quam harum suscipit cumque temporibus. Id, mollitia. Voluptates, laboriosam laborum. Cumque non iste veritatis nostrum quos quis ad rem voluptatem natus quod nemo eveniet fuga voluptatum deleniti eaque provident minus nobis placeat consectetur atque dolores dolor, voluptates ratione. Fugit eum sed sunt laborum. Ad deserunt neque esse voluptatum animi libero, tempora provident tempore, facilis enim vitae nesciunt et doloremque obcaecati expedita sint possimus eveniet. Autem veniam debitis facilis pariatur aspernatur architecto culpa possimus ratione minima nobis adipisci provident quia cupiditate harum eveniet dignissimos sequi ullam explicabo, ut nihil odio eum! Iure omnis consequuntur corrupti natus itaque, ipsam esse incidunt corporis officia at quia similique quae et. Quasi explicabo iusto pariatur iure dicta aliquam provident ipsa rem doloremque et modi, quos velit error non adipisci eum expedita similique accusantium beatae perferendis ducimus? Voluptatibus at culpa provident eum vel ipsam beatae a! In aspernatur, suscipit modi animi fugiat aperiam iure molestias, deleniti architecto necessitatibus, laboriosam perspiciatis doloribus odio eum? Necessitatibus, ut possimus quo blanditiis expedita deleniti neque, voluptate fugiat ipsa laboriosam sit. Voluptatem libero perferendis, non sapiente iure fugit illum sit id sint?</p>
            {
                product.length > 0 ? <div className="productCard">
                    {
                        product.map((ele) => {
                            return <div className='productImgCard'>
                                <img src={ele.image} alt="" height="150px" width="150px" />
                                <h3>{ele.title}</h3>
                                <p>$ {ele.price}</p>
                                <Link to={`/productDetail/${ele.id}`}><button>Show Product</button></Link>
                               
                            </div>
                        })
                    }
                </div> : <h2 style={{ color: "red", textAlign:"center", padding:"1rem" }}>No Data Match</h2>

            }

        </div>
    );
}

export default Product;