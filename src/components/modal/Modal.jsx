import React from 'react';
import styles from './modal.module.css';

const Modal = ({exercise, onClose}) => {
    return (
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
                <h1 className={styles.modal__title}>
                    {exercise.exercisesName}
                </h1>
                <img src={exercise.gifExample} alt={`Exercise ${exercise.exercisesName}`} className={styles.modal__img}/>
                <p className={styles.modal__text}>{exercise.explanation}</p>
                <div className={styles.modal__text}>
                    {exercise.tips.split('\n').map((line, index) => (
                        <p className={styles.modal__tip} key={index}>{line}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Modal;



