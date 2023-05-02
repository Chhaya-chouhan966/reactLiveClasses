import React, { useEffect, useState } from 'react'
import './style.css'
import Footer from './Footer'

const Main = () => {
    const [all, setAll] = useState([])
    const [maleArr, setMaleArr] = useState([]);
    const [femaleArr, setFemaleArr] = useState([]);
    const [allCheak, setAllCheak] = useState(true)

    useEffect(() => {
        if (allCheak) {
            All()
        }
    },[allCheak])

    const All = () => {

        fetch(' https://randomuser.me/api/?results=20')
            .then((res) => res.json())
            .then((data) => {
                setAll(data.results);
                setMaleArr(data.results.filter((ele) => ele.gender === "male"));
                setFemaleArr(data.results.filter((ele) => ele.gender === "female"))
            })
        setAllCheak(true)

    }

    const Male = () => {
        setAll(maleArr.filter((ele) => ele.gender === "male"));
        setAllCheak(false)
    }
    const Female = () => {
        setAll(femaleArr.filter((ele) => ele.gender === "female"));
        setAllCheak(false)
    }

    return (
        <div className='main'>
            <h1>User Details</h1>
            <br />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, aut! In, saepe provident vitae, nihil perferendis labore totam enim laboriosam repudiandae, recusandae atque. Reiciendis, deserunt veniam perspiciatis totam et vitae expedita quasi tempore iure quam molestias at dolorem voluptas facere cupiditate adipisci, iste veritatis quisquam rem? Accusantium minima cupiditate facilis eius quidem nesciunt perspiciatis facere distinctio aliquid dolor. Sit dignissimos voluptatem ab adipisci corrupti. Nulla odio vitae omnis repellendus obcaecati iure laborum, suscipit ullam optio, quasi, quod accusamus? Nobis vitae, quasi facere exercitationem aliquam, voluptatibus sint ex aperiam ad nesciunt quisquam fuga numquam veritatis suscipit, corrupti quis quidem minima at!</p>
            <br />

            <input onChange={All} name='gender' type="radio" checked={allCheak} /> &nbsp;
            <label htmlFor="">All</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <input onClick={Male} name='gender' type="radio" />&nbsp;
            <label htmlFor="">Male</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <input onClick={Female} name='gender' type="radio" />&nbsp;
            <label htmlFor="">Female</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            <br />
            <hr />
            <Footer allData={all} />
        </div>
    )
}

export default Main