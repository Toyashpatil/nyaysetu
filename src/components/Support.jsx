import React from 'react'

const Support = ({ title, data, link }) => {
    return (
        <div>
            <div>
                {title}
            </div>
            <div>
                {data}
            </div>
            <div>
            <h1>Additional Resources</h1>
                <a href={link}>{link}</a>
            </div>
        </div>
    )
}

export default Support