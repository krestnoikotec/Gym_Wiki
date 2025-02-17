import React from 'react';
import style from './CardList.module.css';
import Card from "../card/Card.jsx";

const CardList = ({ exercises }) => {
    return (
        <div className={style.post__list}>
            {exercises.map((exercise, index) => (
                <Card exercise={exercise} number={index + 1} key={exercise.exercisesName} />
            ))}
        </div>
    );
};

export default CardList;
