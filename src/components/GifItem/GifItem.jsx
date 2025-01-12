import React from 'react';

import styles from './GifItem.module.css';

const GifItem = React.memo(({ imageUrl = '', title = '' }) => {
  return (
    <div className={styles.gifItem}>
      <img className={styles.gifImage} src={imageUrl} alt={title} />
      <div className={styles.gifTitleContainer}>
        <div className={styles.gifTitleBg}></div>
        <h4 className={styles.gifTitle}>{title}</h4>
      </div>
    </div>
  );
});

export default GifItem;
