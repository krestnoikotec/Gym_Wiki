import React, {useEffect, useState} from 'react';
import './styles/App.css'
import Header from "./components/header/Header.jsx";
import CardList from "./components/cardList/CardList.jsx";
import FilterList from "./components/filterList/FilterList.jsx";

function App() {

    const [exercises, setExercises] = useState([]);
    const equip = [...new Set(exercises.flatMap(ex => ex.equipment))]
    const muscle =[...new Set(exercises.flatMap(ex => ex.muscleGroup))];

    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(exercises => setExercises(exercises))
            .catch(err => console.log('Error fetching exercises:', err));
    }, [])

  return (
      <div>
          <Header/>
          <div className="body__container">
              <FilterList/>
              <CardList exercises={exercises}/>
          </div>
      </div>
  )
}

export default App
