import React from 'react';
import "./Filter.css"

const Filter = ({label, name, checked, onChange}) => {
    return (
        <div className="filter__container">
            <label className="container">
                <input type="checkbox" checked={checked || false} onChange={onChange} name={name}/>
                <div className="line"/>
                <div className="line line-indicator"/>
            </label>
            <span className="label_text">{label}</span>
        </div>
    );
};

export default Filter;