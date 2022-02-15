import React from 'react'


export default function Card(props) {
    return (

        <div className='container'>

            

            <div className='card-title'>
            <p>{props.id}</p>
                <h2>{props.name}</h2>

                <div className='image'>
                    <img className='img' src={props.image} alt="..." />
                </div>
                
                <div className='para'>
                    <p>Contact no:-{props.phone}</p>
                    <p>E-mail:-{props.mail}</p>
                </div>

            </div>

            
        </div>
    )
}
