import { FC } from 'react';

import Image from 'next/image';

import styles from './HeroImage.module.scss';
interface IProps {
  imagePath: string;
}

const HeroImage: FC<IProps> = ({ imagePath }) => {
  return (
    <div className={styles.heroImageContainer}>
      <Image
        src={imagePath}
        className={styles.heroImage}
        alt="alta imagine"
        sizes="100vw"
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

export default HeroImage;
