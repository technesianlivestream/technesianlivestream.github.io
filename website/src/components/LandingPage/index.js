import React from 'react';
import styles from './styles.module.css';

const LandingPage = () => {
    return (
        <div className="container">
            <div className="text-section">
                <h1>Welcome to Our Site</h1>
                <p>This is some introductory text about the site.</p>
                <div className="buttons">
                    <button className="landing-page-button">Button 1</button>
                    <button className="landing-page-button">Button 2</button>
                    <button className="landing-page-button">Button 3</button>
                </div>
            </div>
            <div className="image-section">
                <img src="/img/tls-logo.svg" alt="TLS Logo" />
            </div>
        </div>
    );
};

export default LandingPage;
