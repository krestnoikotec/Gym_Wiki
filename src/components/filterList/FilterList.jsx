import React from 'react';
import styles from './FilterList.module.css';
import Filter from "../filter/Filter.jsx";

const FilterList = ({ filterItems }) => {

    const renderFilterGroup = (section) => (
        <div className={styles.filter_group} key={section.title}>
            <h1 className={styles.filter__title}>{section.title}</h1> {/* Заголовок для групи */}
            {section.items.map((item, index) => (
                <Filter key={index} label={item} />
            ))}
        </div>
    );

    return (
        <div className={styles.filter_group}>
            {filterItems.map(renderFilterGroup)}
        </div>
    );
};

export default FilterList;