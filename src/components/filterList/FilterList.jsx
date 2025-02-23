import React from 'react';
import styles from './FilterList.module.css';
import Filter from "../filter/Filter.jsx";

const FilterList = ({ filterItems, filter, setFilter }) => {

    const handleFilterChange = (key, value) => {
        setFilter(prevState => ({
            ...prevState,
            [key]: prevState[key] === value ? '' : value // Якщо вибрано те саме значення, скидаємо фільтр
        }));
    };

    const renderFilterGroup = (section) => (
        <div className={styles.filter_group} key={section.key}>
            <h1 className={styles.filter__title}>{section.title}</h1> {/* Заголовок для групи */}
            {section.items.map((item, index) => (
                <Filter
                    key={index}
                    label={item}
                    name={section.title}
                    checked={filter[section.key] === item}
                    onChange={() => handleFilterChange(section.key, item)}
                />
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
