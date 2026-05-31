import React from 'react';
export default function About({image,about}){
    return(
        <aside>
                <img src={image} alt='https://via.placeholder.com/215' />
                <p> {about} </p>
        </aside>
       
    )
}