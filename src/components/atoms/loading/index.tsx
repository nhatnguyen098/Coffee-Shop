import React from 'react'
import './style.scss'
const Index = () => {
    const owlClass = 'a-loading'
    return (
        <div className = {owlClass}>
        <div className = {`${owlClass}-arrow`}></div>
    </div>
    )
}

export default Index
