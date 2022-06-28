import * as React from 'react';
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Food from "../../styles/image/utensils-solid.svg";

// 3. 푸터에는 카피라이트 추가(`@ 2022 내이름`)
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '} @ 2022 임효진
                <span className={styles.logo}>
            <Image src={Food} alt="awesome food logo" width={20} height={16}/>
          </span>
            </a>
        </footer>
    );
};
export default Footer;
