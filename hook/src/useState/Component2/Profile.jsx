import React, { useState } from 'react'
import './profile.css'

const Profile = () => {
    const [name, setName] = useState({
        name: "Tani Chouhan",
        image: "https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg",
        email: "tanichouhan333@gmail.com",
        gender: "femele"
    })

    const [color, setColor] = useState({
        bgColor: "white",
        textColor: "black",
        title: "Uncheck to switch light mode"

    })

    const [female, setFemale] = useState(true);
    const [male, setMale] = useState(false);

    const Female = () => {
        setName(
            {
                name: "Tani Chouhan",
                image: "https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg",
                email: "tanichouhan333@gmail.com",
                gender: "female"

            }
        )
        setFemale(true)
        setMale(false)
    }
    const Male = () => {
        setName(
            {
                name: "Ritik Bhagele",
                image: "https://img.freepik.com/free-photo/smiling-hispanic-male-executive-gesturing-thumbs-up-against-isolated-background_662251-929.jpg",
                email: "ritikbaghele@gmail.com",
                gender: "male"
            }
        )
        setFemale(false)
        setMale(true)


    }

    const ThemeChange = () => {
        if (color.bgColor === "black") {
            setColor({
                bgColor: "white",
                textColor: "black",
                title: "Uncheck to switch light mode"
            })
        } else {
            setColor({
                bgColor: "black",
                textColor: "white",
                title: "Check to switch dark mode"
            })
        }
    }

    return (
        <div className='profile'>
            <div className="profileLeft">
                <img src={name.image}
                    width="90%" height="90%" alt="" />
            </div>
            <div className="profileRight" style={{ backgroundColor: color.bgColor, color: color.textColor }}>
                <h2>{name.name}</h2>
                <h3>{name.email}</h3>
                {/* <h4>Gender:{name.gender}</h4> */}

                <div className='name'>
                    <input name="gender" type="radio" checked={female} />&nbsp;
                    <label>Female</label>&nbsp;&nbsp;
                    <input name="gender" type="radio" checked={male} />&nbsp;
                    <label>Male</label>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sapiente laborum, placeat eaque ipsam animi reiciendis perspiciatis minima! Illo a quisquam exercitationem inventore ad quibusdam sunt, iure tenetur nemo suscipit.</p>

                <div className='checkbox'>
                    <input type="checkbox" onChange={ThemeChange} />&nbsp;
                    <label htmlFor="">{color.title}</label><br />
                </div>
                <div className='btn'>
                    <button onClick={Female}>Tani Chouhan</button>&nbsp;&nbsp;
                    <button onClick={Male}>Ritik Bhaghele</button>
                </div>
            </div>
        </div>
    )
}

export default Profile