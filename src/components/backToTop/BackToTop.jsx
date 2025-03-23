import React, {useEffect, useState} from 'react';
import styles from "./backToTop.module.css"

const BackToTop = () => {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY  > 350){
                setVisible(true);
            }
            else setVisible(false);
        }

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    return (
        <div
            id="back_to_top"
            className={`${styles["back-to-top"]} ${isVisible ? styles.visible : ""}`}
            onClick={toTop}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
            </svg>
        </div>
    );
};

export default BackToTop;