import React, {useEffect, useState, useMemo} from 'react';
import './styles/App.css'
import Header from "./components/header/Header.jsx";
import CardList from "./components/cardList/CardList.jsx";
import FilterList from "./components/filterList/FilterList.jsx";
import Search from "./components/search/Search.jsx";
import ShowMore from "./components/showMore/ShowMore.jsx";
import Modal from "./components/modal/Modal.jsx";

function App() {

    useEffect(() => {
        const baseURL = window.location.hostname === 'localhost'
            ? 'http://localhost:5173/Gym_Wiki/'  // Локальний сервер
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
            key: "equipment",
            title: "Equipment",
            items: equip
        },
        {
            key: "muscle",
            title: "Muscle Group",
            items: muscle
        }
    ]

    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 920 && window.screen.width > 920);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [filter, setFilter] = useState({muscle: "", equipment: "", query: ""});

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 920 && window.screen.width > 920);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            // Якщо відкрита модалка та натиснута клавіша "Space"
            if (selectedExercise && (e.key === " " || e.key === "Spacebar" || e.keyCode === 32)) {
                e.preventDefault();
            }
        };

        document.addEventListener("keydown", handleKeyDown, { passive: false });

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedExercise]);

    const sortedCards = useMemo(() => {
        return [...exercises].filter(ex => {
            if (filter.muscle && !ex.muscleGroup.includes(filter.muscle)) {
                return false; // Відфільтровуємо за м'язовою групою
            }
            if (filter.equipment && !ex.equipment.includes(filter.equipment)) {
                return false; // Відфільтровуємо за обладнанням
            }
            return true;
        });
    }, [filter.muscle, filter.equipment, exercises]);

    const sortedAndSearchedCards = useMemo(() => {
        const query = filter.query.toLowerCase();
        if (!query) return sortedCards; // Якщо запит порожній, повертаємо всі картки

        // Фільтруємо картки, де назва містить запит
        const filteredCards = sortedCards.filter(card =>
            card.exercisesName.toLowerCase().includes(query)
        );

        // Сортуємо: спочатку ті, що починаються з запиту, потім інші, з алфавітним порядком
        filteredCards.sort((a, b) => {
            if(a.exercisesName.toLowerCase().startsWith(query) && !b.exercisesName.toLowerCase().startsWith(query)) return -1;
            if(!a.exercisesName.toLowerCase().startsWith(query) && b.exercisesName.toLowerCase().startsWith(query)) return 1;

            return a.exercisesName.toLowerCase().localeCompare(b.exercisesName.toLowerCase());
        });

        return filteredCards;
    }, [filter.query, sortedCards]);

    const openModal = (exercise) => {
        setSelectedExercise(exercise);
        const scrollY = window.scrollY;
        document.body.style.top = `-${scrollY}px`;

        // Фіксуємо тіло, щоб не було скролу
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
        document.body.style.overflow = "hidden";
    }

    const closeModal = () => {
        setSelectedExercise(null);
        const scrollY = parseInt(document.body.style.top || "0") * -1;

        // Повертаємо стилі назад
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        document.body.style.top = "";

        // Відновлюємо скрол на попередню позицію
        window.scrollTo(0, scrollY);
    }

    return (
      <div style={{overflowX: "hidden"}}>
          <Header/>
          {!isDesktop && (
              <div className={`filter-panel ${isFilterOpen ? "open" : ""}`}>
                  <FilterList filterItems={filterItems} filter={filter} setFilter={setFilter}/>
              </div>
          )}
          <div className="body__container">
              {isDesktop && <FilterList filterItems={filterItems} filter={filter} setFilter={setFilter}/>}
              <div className="cards_and_search__container">
                  <div className="search__container">
                      <Search value={filter.query} onChange={e => setFilter({...filter, query: e.target.value})}/>
                      {!isDesktop && <ShowMore onClick={() => setIsFilterOpen(!isFilterOpen)}/>}
                  </div>
                  <CardList exercises={sortedAndSearchedCards} onExerciseClick={openModal}/>
              </div>
          </div>
          {selectedExercise && <Modal exercise={selectedExercise} onClose={closeModal}/>}
      </div>
  )
}

export default App
