import React from 'react'
import { Link } from 'react-router-dom'

const GifInfoBox = ({gif}) => {
    
    const gifDetailsLink = `/details/${gif.id}`

    return (
        <div key={gif.id} className="gif-container">
            <h3>{gif.title}</h3>
            <img className="gif-thumb" src={gif.images.downsized_still.url} alt={gif.title}/>
            <p><Link to={gifDetailsLink}>View more</Link></p>
        </div>
    )
}

export default GifInfoBox
