import React from 'react'
import { Link } from 'react-router-dom'

const LinksButton = ({name}) => {
    return (
        <div>
            <Link to="#" className="link link-hover">{name}</Link>
        </div>
    )
}

export default LinksButton
