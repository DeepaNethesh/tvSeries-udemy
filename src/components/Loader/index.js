import React from 'react'
import loaderSrc from '../../assets/Loader.gif'

const Loader = props => {
    return (
    <div>
        <img 
        style={{ width: '75px' }}
        alt='Loader icon'
        src={loaderSrc} />
    </div>
    )
}

export default Loader