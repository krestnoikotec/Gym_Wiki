import React from 'react';
import styled from './Search.module.css';

const Search = () => {
    return (
        <input type="text" name="text" className={styled.input} placeholder="Write the name of the exercise" />
    );
}

export default Search;