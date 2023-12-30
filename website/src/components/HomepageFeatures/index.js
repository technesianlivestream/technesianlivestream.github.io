import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Cloud Technology',
    Svg: require('@site/static/img/cloud.svg').default,
    description: (
      <>
        Cloud knowledge is key in the IT Marketplace whether youre a developer, engineer or architect.
      </>
    ),
  },
  {
    title: 'DevOps',
    Svg: require('@site/static/img/devops.svg').default,
    description: (
      <>
        The evolution of Operations and Developer roles means DevOps is a must have skillset.
      </>
    ),
  },
  {
    title: 'Cyber Security',
    Svg: require('@site/static/img/cybersecurity.svg').default,
    description: (
      <>
        Cloud and Automation means we can do more, but with more to manage security is then more important than ever.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
