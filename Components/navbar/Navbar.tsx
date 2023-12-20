import React from 'react'
import styles from './Navbar.module.scss';
import menu_items from './navbar.json';
import { KeyboardArrowDownOutlined, KeyboardArrowUp } from '@mui/icons-material';
import Image from 'next/image';


const Navbar = () => {

    const icons : any = {
        down_arrow : <KeyboardArrowDownOutlined />,
        up_arrow : <KeyboardArrowUp />
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.headerLogo}>
                <Image src="https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='header-logo' className={styles.headerLogoImage} />
            </div>
            <ul>
                {menu_items.map((item : any) => {
                    return (<>
                        <li> {item.title} </li>
                        <span> {icons[item.icon]} </span>
                    </>)
                })}
            </ul>
        </div>
    )
}

export default Navbar;