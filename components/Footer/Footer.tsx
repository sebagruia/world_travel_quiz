import styles from './Footer.module.scss';

import Image from 'next/image';

import footerLogo from '../../public/assets/svg/a_star_alliance_member.svg';

const Footer = () => {
  return (
    <footer
      className={`${styles.footerContainer} d-flex py-3 pe-sm-5 justify-content-center justify-content-sm-end`}
    >
      <div className="">
        <Image src={footerLogo} alt="footer logo" />
      </div>
    </footer>
  );
};

export default Footer;
