import React from 'react';
import styles from './card.module.css';

const Card = ({ number, exercise }) => {

    const truncatedDescription = exercise.explanation.slice(0, 110)

    return (
        <div className={styles.card}>
            {exercise.exercisesName && (
                <h2 className={styles.card__title}>
                    {exercise.exercisesName}
                </h2>
            )}
            {exercise.gifExample &&(
                <img src={exercise.gifExample} alt={`Exercise ${number}.gif`} className={styles.card__img}/>
            )}
            <div className={styles.card__class_list}>
                {exercise.equipment && (
                    <p className={styles.card__class}>Equipment: {exercise.equipment}</p>
                )}
                {exercise.muscleGroup && (
                    <p className={styles.card__class}>Muscle group: {exercise.muscleGroup}</p>
                )}
            </div>
            {exercise.explanation && (
                <p className={styles.card__desc}>{truncatedDescription}...</p>
            )}
        </div>
    );
};

export default Card;
