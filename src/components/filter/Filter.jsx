import React from 'react';
import "./Filter.css"

const Filter = (label) => {
    return (
        <div className="filter__container">
            <label className="container">
                <input type="checkbox" defaultChecked="checked"/>
                <div className="line"/>
                <div className="line line-indicator"/>
            </label>
            <span className="label_text">{label.label}</span>
        </div>
    );
};

export default Filter;