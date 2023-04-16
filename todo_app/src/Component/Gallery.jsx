import { useEffect, useState } from 'react'
import './gallery.css'

const Gallery = () => {
    const [datas, setDatas] = useState("flower") //inputget
    const [btn, setBtn] = useState([]);//btton
    const [get, setGet] = useState([])

    useEffect(() => {
        const a = fetch(`https://api.unsplash.com/search/photos/?query=${datas}&client_id=mRDaAzHpCpLLsxIWnIdSB6NYOK3EOtJ2e9DITojTGkQ`)
        a.then((res) => {
            return res.json()
        }).then((data) => {
            setGet(data.results)
        })
    }, [datas])

    return (
        <div className="gallery">
            <div className="nav">
                <div className="navLeft">
                    <h1>Gallery</h1>
                </div>
                <div className="navRight">
                    <input type="text" value={datas} onChange={ (e) => setDatas(e.target.value)} placeholder='Search' />
                    <button onClick={ () =>{
                        setBtn(datas)
                    }}>Search</button>
                </div>
            </div>
            <div className="result">
                {
                    get.map((ele) => {
                        return (
                            <div key={ele.id} className="resultContaner">
                                <p className='p'>{ele.alt_description}</p>
                                <p className='p1'>{ele.updated_at}</p>
                                <img src={ele.urls.small} alt={ele.alt_description} width="350px" height="450px" />

                            </div>

                        );
                    })
                }
            </div>
        </div>
    )

}

export default Gallery;