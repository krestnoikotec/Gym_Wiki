import React, {useEffect, useState} from 'react';
import './styles/App.css'
import Header from "./components/header/Header.jsx";
import CardList from "./components/cardList/CardList.jsx";
import FilterList from "./components/filterList/FilterList.jsx";
import Search from "./components/search/Search.jsx";

function App() {

    useEffect(() => {
        const baseURL = window.location.hostname === 'localhost'
            ? 'http://localhost:5175/Gym_Wiki/'  // Локальний сервер
            : 'https://krestnoikotec.github.io/Gym_Wiki/';  // GitHub Pages

        fetch(`${baseURL}exercises.json`)
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
              <div className="cards_and_search__container">
                  <div className="search__container">
                      <Search/>
                  </div>
                  <CardList exercises={exercises}/>
              </div>
          </div>
      </div>
  )
}

export default App
