import React, { useEffect, useState } from 'react'
import '../App.css'
import { FcApproval } from "react-icons/fc";

const UseEffectAPI = () => {

    const [users, setUser] = useState([])

    const getUsers = async () => {
        const response = await fetch('https://api.github.com/users');
        setUser(await response.json());
        // console.log(data);
    }

    useEffect(() => {
        getUsers();
    }, [])
    return (
        <>
            <h2 className='topic'>List of GitHub Users</h2>
            <div className="main-container">
                {
                    users.map((curElem) => {
                        return (
                            <div className='outer-card' key={curElem.id}>
                                <div>
                                    <img src={curElem.avatar_url} alt="#" />
                                </div>
                                <div className='card-info'>
                                    <h3>{curElem.login} <FcApproval /></h3>
                                    <p className='github-name'>{curElem.title}</p>
                                    <div className='extra-info'>
                                        <div className='number-info'>
                                            <p>Article</p>
                                            <h4>100</h4>
                                        </div>
                                        <div className='number-info'>
                                            <p>Followers</p>
                                            <h4>980</h4>
                                        </div>
                                        <div className='number-info'>
                                            <p>Rating</p>
                                            <h4>8.9</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default UseEffectAPI
