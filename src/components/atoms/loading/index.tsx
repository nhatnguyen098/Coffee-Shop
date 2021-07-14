import React from 'react'
import './style.scss'
interface ILoading {
    width?: string;
    height?: string;
}
const Index: React.FC<ILoading> =  ({width = '64px', height = '64px'}) => {
    const owlClass = 'a-loading'
    return (
        <div className = {owlClass} style={{width: width, height: height}}>
        <div className = {`${owlClass}-arrow`} style={{width: width, height: height}}></div>
    </div>
    )
}

export default Index
