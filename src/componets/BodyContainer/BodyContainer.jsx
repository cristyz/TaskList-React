import React from 'react'

import { Link } from 'react-router-dom'

import { CgDetailsMore, CgClose } from 'react-icons/cg'

import './BodyContainer.css'


export default ({ List, setList }) => {
    const deleteIten = (taskId) => {
        let ListFiltred = List.filter(e => e.id !== taskId)
        setList(ListFiltred)
    }
    const taskCompleted = (taskId) => {
        let taskComple = List.map(e => {
            if (taskId == e.title) {
                e.completed = !e.completed
            }
            return e
        })
        setList(taskComple);
    }
    return (
        <div className="body-container">
            {List.map(e =>
                <div
                style={e.completed ? {borderLeft:'6px solid #00adb5'}: {}}
                className='task-container'>
                    <div onClick={() => {taskCompleted(e.title)}} className="task-name">
                        {e.title}
                    </div>
                    <div className="container-buttons">
                        <Link to={e.title} className='button-info'>
                            <CgDetailsMore size={20} />
                        </Link>

                        <button
                            onClick={() => deleteIten(e.id)}
                            className='button-info'>
                            <CgClose size={20}/>
                        </button>
                    </div>
                </div>)}
        </div>
    )
}