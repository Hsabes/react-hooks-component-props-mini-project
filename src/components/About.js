import React from 'react';

function About(props = 'http://www.w3.org/2000/svg') {
    
    const image = props.image;
    const about = props.about;

    return (
        <aside>
            <img src={image} alt="blog logo"></img>
            <p>{about}</p>
        </aside>
    )
}

export default About;