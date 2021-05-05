import React from 'react'

import { useParams } from "react-router-dom";

import './Details.css'

export default ({ List }) => {
    const Child = () => {
        // We can use the `useParams` hook here to access
        // the dynamic pieces of the URL.
        let { id } = useParams();

        return id
    }

    return (
        <div className="container-details">
            <div className="header-details">
                <h1><Child /></h1>
                <div className='date-hora'>
                    {List.map(e => {
                        if (e.title == Child()) {
                            return <p>{e.hora}</p>
                        }
                    })}
                    
                    {List.map(e => {
                        if (e.title == Child()) {
                            return <p>{e.data}</p>
                        }
                    })}
                </div>
            </div>
            <p>{List.map(e => {
                if (e.title == Child()) {
                    return e.details
                }
            })}</p>
        </div>
    )
}