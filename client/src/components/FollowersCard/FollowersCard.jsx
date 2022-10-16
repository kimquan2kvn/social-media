import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { getAllUser } from '../../api/UserRequests'
import FollowersModal from "../FollowersModal/FollowersModal";

import User from '../User/User'
import './FollowersCard.css'

function FollowersCard({location}) {
    const [modalOpened, setModalOpened] = useState(false);
    const [persons, setPersons] = useState([])
    const {user} = useSelector((state)=> state.authReducer.authData)

    // useEffect get list user
    useEffect(()=> {
        const fetchPersons = async () => {
            const {data} = await getAllUser();
            setPersons(data)
        }
        fetchPersons()
    },[])


  return (
    <div className="FollowersCard">
        <h3>People you may know</h3>
        {persons.map((person,id) =>{
            if(person._id !== user._id) return <User person={person} key={id}/>
        })}
        {
            !location ? (
                <span onClick={()=> setModalOpened(true)}>Show more</span>
            ) : ("")
        }
        <FollowersModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
        />
    </div>
  )
}

export default FollowersCard