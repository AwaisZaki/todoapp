import React, { useState } from 'react';
import './Avatar.css'
import 'tachyons'
import Avatarlist from './Avatarlist'

const Avatar = (props) => {

    const avtarListArray = [
        {
            id: 1,
            name: 'Awais',
            work: 'Web Developer'
        },
        {
            id: 2,
            name: 'Ahsan Masood',
            work: 'Software Engineer'
        },
        {
            id: 3,
            name: 'Hassan Zaki',
            work: 'Frontend Engineer'
        },
        {
            id: 4,
            name: 'Nouman Ahmed',
            work: 'Designer'
        }
    ]

    const newAvatarList = avtarListArray.map((avatarCard, i) => {
        return <Avatarlist id={avtarListArray[i].name}
            name={avtarListArray[i].name}
            work={avtarListArray[i].work} />


    })

    return (
        <div>
            <h1 className='tc'>Welcome to Avatar World</h1>
            {newAvatarList}
            <button>Subscribe</button>
        </div>
    )
}

export default Avatar;