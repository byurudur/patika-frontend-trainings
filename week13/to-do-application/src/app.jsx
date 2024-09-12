import { useState } from 'preact/hooks'
import './app.css'
import Footer from './components/footer/Footer'

export function App() {
  // inputa yeni bir deger girildiginde, durumunu takip etmek icin:
  const [newInput, setNewInput] = useState("");
  // baslangicta bos bir array olan listeyi olusturup durumunu takip etmek icin:
  const [list, setList] = useState([]);
  // check edilen liste elemanlarinin durumunu takip etmek icin:
  const [checkedLi, setCheckedLi] = useState([]);
  // tum liste elemanlarinin filtreleme durumunu takip etmek icin:
  const [filter, setFilter] = useState("all");


  // input onChange oldugunda, o sirada girilen degeri newInput olarak setle:
  const inputChange = (event) => {
    setNewInput(event.target.value);
  }

  // TODO LISTESINE YENI BIR ELEMAN EKLEME:
  const addList = (event) => {
    event.preventDefault();
    // yeni inputun degeri bos degilse, onceki listeyi al ve ona yeni inputu ekle.
    if (newInput.trim() !== "") {
      setList(prevList => [...prevList, newInput.trim()]);
      // sonra input alanini sifirla:
      setNewInput("");
    }
  }

  // TODO LISTESINDEN ELEMAN SILME:
  const removeLi = (index) => {
    setList(list.filter((_, i) => i !== index));
    setCheckedLi(checkedLi.filter(i => i !== index));
  }

  // CHECK ETME
  const checkBoxChange = (index) => {
    setCheckedLi(prev => {
      // eger mevcut liste, index'ine gore check edilen liste elemanini iceriyosa, 
      if (prev.includes(index)) {
        // elemani (index'ine gore) listeden kaldir:
        return prev.filter(i => i !== index);
      } else {
        // degilse elemani (index'ine gore) mevcut checked listesine ekle:
        return [...prev, index];
      }
    });
  }

  // clear completed butonuna basildiginda clearCompleted fonksiyonu calissin:
  const clearCompleted = () => {
    // isaretlenen elemani filtreleyerek listeyi set et: 
    setList(list.filter((_, index) => 
      !checkedLi.includes(index)
    ));
    // sonrasinda listeyi sifirla:
    setCheckedLi([]);
  }

  // butonlara gore listeyi filtreleme (all, active, completed)
  const getFilteredItems = () => {
    // eger liste elemani check edilmemisse (className'i active olanlar), getir
    if (filter === "active") {
      return list.filter((_, index) => !checkedLi.includes(index));
    }
    // eger liste elemani check edilmisse(className'i completed olanlar), getir 
    if (filter === "completed") {
      return list.filter((_, index) => checkedLi.includes(index));
    }
    // diger durumlarda tum listeyi getir (all)
    return list;
  }

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={addList}>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              value={newInput}
              onChange={inputChange}
            />
          </form>
        </header>

        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">
            Mark all as complete
          </label>

          <ul className="todo-list">
            {getFilteredItems().map((item, index) => (
              <li key={index} className={checkedLi.includes(list.indexOf(item)) ? 'completed' : ''}>
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    checked={checkedLi.includes(list.indexOf(item))}
                    onChange={() => checkBoxChange(list.indexOf(item))}
                  />
                  <label>{item}</label>
                  <button className="destroy" onClick={() => removeLi(list.indexOf(item))}></button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>{list.length}</strong> items left
          </span>

          <ul className="filters">
            <li>
              <a href="#/" className={filter === "all" ? "selected" : ""} onClick={() => setFilter("all")}>All</a>
            </li>
            <li>
              <a href="#/" className={filter === "active" ? "selected" : ""} onClick={() => setFilter("active")}>Active</a>
            </li>
            <li>
              <a href="#/" className={filter === "completed" ? "selected" : ""} onClick={() => setFilter("completed")}>Completed</a>
            </li>
          </ul>

          <button className="clear-completed" onClick={clearCompleted}>
            Clear completed
          </button>
        </footer>
      </section>
      <Footer />
    </>
  )
}