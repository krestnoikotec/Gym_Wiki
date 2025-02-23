import React from 'react';
import style from "./showMore.module.css";

const Checkbox = ({...props}) => {
    return (
            <label className={style.burger} htmlFor="burger">
                <input type="checkbox" id="burger" {...props}/>
                <span />
                <span />
                <span />
            </label>
    );
}

export default Checkbox;
