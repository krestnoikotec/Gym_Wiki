import React from 'react';
import styles from './modal.module.css';
import Button from "../button/Button.jsx";

const Modal = ({exercise, onClose}) => {
    return (
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modal__close__wrapper}>
                    <Button onClick={onClose}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 122.878 122.88"
                            width="24"
                            height="24"
                            stroke="currentColor"
                            fill="white"
                            strokeWidth="5"
                        >
                            <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127
                            c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886
                            c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0
                            c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z"
                                  strokeLinecap="round"/>
                        </svg>
                    </Button>
                </div>
                <h1 className={styles.modal__title}>
                    {exercise.exercisesName}
                </h1>
                <img src={exercise.gifExample} alt={`Exercise ${exercise.exercisesName}`}
                     className={styles.modal__img}/>
                <h2>Explanation:</h2>
                <p className={styles.modal__text}>{exercise.explanation}</p>
                <h2>Tips:</h2>
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



