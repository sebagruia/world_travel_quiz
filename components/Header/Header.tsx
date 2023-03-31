import styles from "./Header.module.scss";

import Image from 'next/image';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../public/assets/svg/logo_head_experts.svg';

const Header = () => {
  return (
    <header className={`${styles.headerContainer} py-4 ps-2 ps-sm-5`}>
      <Navbar.Brand href="#home">
        <Image src={logo} alt="logo image" />
      </Navbar.Brand>
    </header>
  );
};

export default Header;
