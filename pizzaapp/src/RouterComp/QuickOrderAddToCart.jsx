import React from 'react'
import '../Style/QuickOrderAddToCart.css'
import{ Link } from 'react-router-dom'


const QuickOrderAddToCart = () => {
    return (
        <div className='QuickOrderAddToCart'>
            <div className="cartHeader">
                <div className="cartHeaderHead">
                    <h2>WELECOME TO ITALIC PIZZA!</h2><br />
                    <p>We deliver pizza in 40 minutes max. If not pizza's on us!</p>
                </div>
                <div className="cartHeaderFooter">
                    <div className="email">
                        <label htmlFor="">Email</label><br />
                        <input type="text" placeholder='Email' />
                    </div>
                    <br />
                    <div className="phone">
                        <label htmlFor="">Phone</label><br />
                        <input type="text" placeholder="Phone No" />&nbsp;
                    </div>
                    <br />
                    <div className="pizzaSize">
                        <label htmlFor="">Pizza-Size</label><br />
                        <br />
                        <input name='pizzaSize' type="radio" />&nbsp; <label htmlFor="">8-inch</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input name='pizzaSize' type="radio" />&nbsp;<label htmlFor="">10-inch</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input name='pizzaSize' type="radio" />&nbsp;<label htmlFor="">12-inch</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input name='pizzaSize' type="radio" />&nbsp;<label htmlFor="">14-inch</label>
                    </div>
                    <br />
                    <div className="tooping">
                        <label htmlFor="">Toppings</label><br />
                        <br />
                        <input type="checkbox" />&nbsp; <label htmlFor="">Capsicum</label>&nbsp;&nbsp;&nbsp;
                        <input type="checkbox" />&nbsp; <label htmlFor="">Onion</label>&nbsp;&nbsp;&nbsp;
                        <input type="checkbox" />&nbsp; <label htmlFor="">Mash</label>&nbsp;&nbsp;&nbsp;
                        <input type="checkbox" />&nbsp; <label htmlFor="">Tomato</label>

                    </div>
                    <br />
                    <br />
                    <div className="agree">
                        <br />
                        <input type="checkbox" />&nbsp;
                        <label htmlFor="">I agree this terms and conditions.</label>&nbsp;&nbsp;&nbsp;

                    </div>
                </div>
            </div>
            <div className="cartFooter">
                <Link to="/orderDone">
                    <button>Order Now</button>
                </Link>
            </div>
        </div>
    )
}

export default QuickOrderAddToCart