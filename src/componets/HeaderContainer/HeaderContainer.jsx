import React, { useEffect, useState } from 'react'

import './HeaderContainer.css'

import Button from '../Button/Button'

export default ({ List, setList }) => {
    const [InpText, useInpText] = useState('')
    const [InpTextDescription, useInpTextDescription] = useState('')

    useEffect(() => {
        setItemLocalStorage()
    })

    const setItemLocalStorage = () => {
        localStorage.setItem('List', JSON.stringify(List));
    }

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    function getHora() {
        let d = new Date();
        let h = addZero(d.getHours());
        let m = addZero(d.getMinutes());
        let s = addZero(d.getSeconds());
        let time = (h + ":" + m)
        return time
    }

    function dataAtualFormatada() {
        let data = new Date(),
            dia = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0' + dia : dia,
            mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
            mesF = (mes.length == 1) ? '0' + mes : mes,
            anoF = data.getFullYear();
        return diaF + "/" + mesF + "/" + anoF;
    }

    const AddTaskList = () => {
        setList(
            [...List, { title: InpText, id: Math.random(), completed: false, details: InpTextDescription, hora: getHora(), data: dataAtualFormatada() }]
        )
        useInpText('')
        useInpTextDescription('')
    }

    return (
        <header>
            <h1>Task List</h1>
            <div className="header-input">
                <input
                    onChange={e => useInpText(e.target.value)}
                    value={InpText}
                    type="text"
                    placeholder='Tarefa' />
                <div className="button-div">
                    <Button funcClick={AddTaskList}>
                        Adicionar
                    </Button>
                </div>
            </div>
            <input
                placeholder='Descrição'
                className='input-description'
                onChange={e => useInpTextDescription(e.target.value)}
                value={InpTextDescription}
                type="text" />
        </header>
    )
}