import React, {useEffect, useState} from 'react';
import './styles/App.css'
import Header from "./components/header/Header.jsx";
import CardList from "./components/cardList/CardList.jsx";
import FilterList from "./components/filterList/FilterList.jsx";

function App() {

    useEffect(() => {
        fetch('/exercises.json')
            .then(res => res.json())
            .then(exercises => setExercises(exercises))
            .catch(err => console.log('Error fetching exercises:', err));
    }, [])

    const [exercises, setExercises] = useState([]);
    const equip = [...new Set(exercises.flatMap(ex => ex.equipment))]
    const muscle =[...new Set(exercises.flatMap(ex => ex.muscleGroup))];
    const filterItems = [
        {
            title: "Equipment",
            items: equip
        },
        {
            title: "Muscle Group",
            items: muscle
        }
    ]

  return (
      <div>
          <Header/>
          <div className="body__container">
              <FilterList filterItems={filterItems} />
              <CardList exercises={exercises}/>
          </div>
      </div>
  )
}

export default App
