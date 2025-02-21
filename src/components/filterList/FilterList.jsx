import React from 'react';
import styles from './FilterList.module.css';
import Filter from "../filter/Filter.jsx";

const FilterList = ({ filterItems }) => {

    const [selectedFilters, setSelectedFilters] = React.useState({});

    const handleFilterChange = (name, value) => {
        setSelectedFilters((prevState) => ({
            ...prevState,
            [name]: prevState[name] === value ? null : value
        }))
    }

    const renderFilterGroup = (section) => (
        <div className={styles.filter_group} key={section.title}>
            <h1 className={styles.filter__title}>{section.title}</h1> {/* Заголовок для групи */}
            {section.items.map((item, index) => (
                <Filter key={index} label={item} name={section.title} checked={selectedFilters[section.title] === item} onChange={() => handleFilterChange(section.title, item)} />
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