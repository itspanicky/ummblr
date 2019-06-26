import React from 'react';

const AboutMe = () => {
    return (
        <>
            < ul className = "about-me" >
                <a href="https://itspanicky.github.io/" target="_blank"><i className="fas fa-user-circle"></i></a>
                <a href="https://www.linkedin.com/in/nicky-li-09977aa2/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://angel.co/nicky-li-1?al_content=view+your+profile&al_source=transaction_feed%2Fnetwork_sidebar" target="_blank"><i className="fab fa-angellist"></i></a>
                <a href="https://github.com/itspanicky" target="_blank"><i className="fab fa-github"></i></a>
            </ul >
        </>
            
    )
}

export default AboutMe;