import React from 'react';
import './Footer.css'

//Stateless component
const Footer = () => {
        return (
            <footer className="footer is-primary">
                <div className="container">
                    <div className="column">
                        <p>And this right here is a spiffy footer, where you can put stuff.</p>
                    </div>
                    <div className="column has-text-right">
                        <a className="icon" href="#"><i className="fa fa-facebook-square"></i></a>
                        <a className="icon" href="#"><i className="fa fa-twitter"></i></a>
                    </div>
                </div>
            </footer>
        );
};

export default Footer;