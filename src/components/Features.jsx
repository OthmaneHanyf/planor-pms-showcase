import React from 'react';

import assets from '../assets';
import styles from '../styles/Global';

const FeatureCard = ({ iconUrl, iconText }) =>  (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
)

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner02`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Technologies</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>Planor PMS has been implemented using the following technologies.</p>
        </div>

        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.htmlCssJs} iconText="HTML/CSS/JavaScript" />
          <FeatureCard iconUrl={assets.laravel} iconText="Laravel" />
          <FeatureCard iconUrl={assets.postgresql} iconText="PostgreSQL" />
        </div>
      </div>
    </div>
  )
}

export default Features