import React from 'react'
import styles from './Navbar.module.scss';
import menu_items from './navbar.json';
import { Bookmark, KeyboardArrowDownOutlined, KeyboardArrowUp, Settings, WhatsApp } from '@mui/icons-material';
import Image from 'next/image';
import Logo from '../../public/assets/images/logo.svg.svg';

const Navbar = () => {

    const icons : any = {
        down_arrow : <KeyboardArrowDownOutlined />,
        up_arrow : <KeyboardArrowUp />
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.headerLogo}>
                <Image src={Logo} alt='header-logo' loading='lazy' className={styles.headerLogoImage} width={50} height={50} />
            </div>
            <ul className={styles.list_items}>
                {menu_items.map((item : any) => {
                    return (<>
                        <li className={styles.single_item}> {item.title} <span className={styles.list_icon}> {icons[item.icon]} </span> </li>
                    </>)
                })}
            </ul>
            <div className={styles.iconWrapper}>
                <span className={styles.lang}> En </span>
                <span> <Settings /> </span>
                <span> <Bookmark /> </span>
                <span> <WhatsApp /> </span>
                <span> FOLLOW US </span>
                <span> CALL US </span>
            </div>
        </div>
    )
}

export default Navbar;