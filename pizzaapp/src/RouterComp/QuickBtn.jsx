import React from 'react'
import '../Style/quickBtn.css'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


const QuickBtn = () => {
    const { id } = useParams()
    console.log(id);

    const { dessert } = useSelector((storedata) => {
        return storedata
    })

    const selectedItem = dessert.find((ele) => ele.id === parseInt(id));
    console.log(selectedItem);

    return (
        <div className='quickBtn'>
            <div className="quickContainer">
                <div className="quickContainerLeft">
                    {
                        selectedItem && (
                            <img src={selectedItem.linkImagen} alt="" />
                        )
                    }
                </div>
                <div className="quickContainrRight">
                    <h2>FIORI DI JUKKA</h2><br />
                    <p>
                        <span style={{ color: "orange" }}>
                            <i class="bi bi-star"></i>&nbsp;&nbsp;
                            <i class="bi bi-star"></i>&nbsp;&nbsp;
                            <i class="bi bi-star"></i>&nbsp;&nbsp;
                            <i class="bi bi-star"></i>&nbsp;&nbsp;
                        </span>(1 constructor review)
                    </p>
                    <h3 style={{ color: "#c84d28" }}>$7.00 - $50.00</h3><br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, deleniti. Excepturi culpa praesentium eius amet, asperiores ipsum velit perferendis nobis maiores ducimus mollitia nisi magnam hic totam facilis officiis dignissimos. Quibusdam natus voluptates aliquam provident error eveniet molestias odio deserunt!</p>
                    <br />
                    <h3 style={{ color: "brown" }}>NUTRITION VALUE PER 100 G :</h3><br />
                    <h4 style={{ color: "blue" }}>Caloreiss ---------------------------------------20g</h4><br />
                    <h4 style={{ color: "blue" }}>Caloreiss ---------------------------------------20g</h4><br />
                    <Link to="/addtocart">
                        <button className='inQuickCOMPAddToCart'>ADD TO CART</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default QuickBtn