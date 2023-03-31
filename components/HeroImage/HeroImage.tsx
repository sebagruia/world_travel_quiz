import { FC } from 'react';

import Image, { StaticImageData } from 'next/image';

import styles from './HeroImage.module.scss';

// interface IProps {
//   imagePath: string;
// }
interface IProps {
  imagePath: StaticImageData;
}

// const HeroImage: FC<IProps> = ({ imagePath }) => {
//   return (
//     <div
//       className={styles.heroImageContainer}
//       style={{ backgroundImage: `url(${imagePath})` }}
//     ></div>
//   );
// };

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
