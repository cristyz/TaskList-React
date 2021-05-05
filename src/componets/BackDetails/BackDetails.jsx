import React from 'react'

import Button from '../Button/Button'

import { Link } from 'react-router-dom'

export default () => {
    return (
        <header style={{ marginTop: 40 }}>
            <Link to='/'>
                <Button>Voltar</Button>
            </Link>
        </header>
    )
}