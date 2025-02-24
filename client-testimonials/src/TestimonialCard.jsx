import React from 'react'

const TestimonialCard = ({name,review}) => {
    return(
        <div>
            <h1>{name}</h1>
            <h3>{review}</h3>
        </div>
    )
}

export default TestimonialCard