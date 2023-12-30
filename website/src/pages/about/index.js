import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import styles from './styles.module.css'; // Ensure you have this CSS file in the correct path

function About() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title="About" description={siteConfig.tagline}>
      <header className={styles.aboutHeader}>
        {/* Header content if any */}
      </header>
      <main id="main">
        <div className={styles.aboutBody}>
          <div className="container">
            <div className="row">
              {/* Presenter 1 */}
              <div className={clsx("col col--6", styles.presenter)}>
                <img src="/img/profile-ron.png" alt="Presenter 1" className={styles.profilePic} />
                <h2>Ron Amosa</h2>
                <h3>Architect / Hacker / Engineer</h3>
                <p>Ron has over 20 years of hands-on technical experience in various engineering roles within the tech industry, including Systems Engineering, DevOps, Site Reliability, Cyber Security, Solutions Architecture, and Technical Consulting. </p>
                <p> When not sitting behind a computer (which isn't often) Ron enjoys playing Drums, riding motorbikes 🏍️, getting tattood, and doing Brazilian Jiu-Jitsu 🥋.</p>
              </div>
              {/* Presenter 2 */}
              <div className={clsx("col col--6", styles.presenter)}>
                <img src="/img/profile-gt.png" alt="Presenter 2" className={styles.profilePic} />
                <h2>Gerald Tuimalealiifano ("GT")</h2>
                <h3>Site Reliability Engineer</h3>
                <p>
                GT has over 10 years of experience working in various roles, including Systems Engineering, IT Management, and DevOps/SRE. In his free time, he enjoys playing beach volleyball 🏖️ 🏐, touch rugby 🏉, and soccer ⚽.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default About;
