import React from 'react'

 const Announcement = (props) => {
    return (
        <div className="Announcement">

            <h1>{props.message}</h1>
            <h6>{props.person}</h6>            
        </div>
    )
}

export default Announcement; 
