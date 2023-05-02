import React, { useEffect } from 'react'
import '../Style/main.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Home = ({data}) => {
    const dispatch = useDispatch()

    const { dessert } = useSelector((storedata) => {
        return storedata
    })

    useEffect(() => {
        const url = 'https://pizzaallapala.p.rapidapi.com/productos';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '768d6b335cmsh919d097e5789ba5p11a5e0jsnac841190b603',
                'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
            }
        };

        async function fetchData() {
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                dispatch({
                    type: "pizza",
                    payload: result.productos
                })
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchData()

    }, [])

    const navigate = useNavigate()
    const ImageHoverToRedirectPageToOrder = (id) => {
        navigate(`/order/${id}`)
    }




    return (
        <div className='main'>
            <div className="mainBackgroundImageDiv">
                <div className="mainInside">
                    <input type="text" placeholder='Enter Text' />&nbsp;
                    <button className='SubscribBtn'>Subscribe</button>
                </div>
            </div>
            <div className="mainFooter">
                <div className='mainFooterIcon'>

                    <p><i className="bi bi-emoji-laughing"></i>&nbsp;Happy</p>
                    <p><i className="bi bi-apple"></i>&nbsp;Apple</p>
                    <p><i className="bi bi-share"></i>&nbsp;Share</p>
                    <p><i className="bi bi-arrows-move"></i>&nbsp;Four picess</p>
                    <p><i className="bi bi-emoji-laughing"></i>&nbsp;Happy</p>
                    <p><i className="bi bi-apple"></i>&nbsp;Apple</p>
                    <p><i className="bi bi-share"></i>&nbsp;Share</p>
                    <p><i className="bi bi-arrows-move"></i>&nbsp;Four picess</p>


                </div>
                {
                    dessert.map((ele) => {
                        return <div key={ele.id} className='pizzaContainer'>
                            <Link to={`/order/${ele.id}`}>   
                                <img onMouseOver={() => ImageHoverToRedirectPageToOrder(`${ele.id}`)} src={ele.linkImagen} alt="ele.descripcion" />
                            </Link>
                            <h4>{ele.descripcion}</h4>
                            <p style={{ color: "#d37053" }} >${ele.precio}</p>
                            
                        </div>
                    })
                }
            </div>
        </div>
    )
}


export default Home 