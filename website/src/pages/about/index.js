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
                <img src="path-to-profile-pic-1.jpg" alt="Presenter 1" className={styles.profilePic} />
                <h3>Ron Amosa</h3>
                <p>Presenter 1 bio...</p>
              </div>
              {/* Presenter 2 */}
              <div className={clsx("col col--6", styles.presenter)}>
                <img src="path-to-profile-pic-2.jpg" alt="Presenter 2" className={styles.profilePic} />
                <h3>Gerald Tuimalealiifano ("GT")</h3>
                <p>Presenter 2 bio...</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default About;
