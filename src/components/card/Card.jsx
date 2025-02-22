import React from 'react';
import styles from './card.module.css';
import Button from "../button/Button.jsx";

const Card = ({ number, exercise }) => {

    const truncatedDescription = exercise.explanation.slice(0, 110)

    return (
        <div className={styles.card}>
            <h2 className={styles.card__title}>
                {exercise.exercisesName}
            </h2>
            <img src={exercise.gifExample} alt={`Exercise ${number}.gif`} className={styles.card__img}/>
            <div className={styles.card__class_list}>
                <p className={styles.card__class}>Equipment: {exercise.equipment}</p>
                <p className={styles.card__class}>Muscle group: {exercise.muscleGroup}</p>
            </div>
            <p className={styles.card__desc}>{truncatedDescription}...</p>
            <div className={styles.btn_container}>
                <Button>
                    Show more
                </Button>
            </div>
        </div>
    );
};

export default Card;
