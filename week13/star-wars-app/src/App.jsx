import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import axios from "axios";
import "./App.css";
import { shipImages } from './shipImages';
import Detail from "./components/Detail/Detail";

function App() {
  // gemileri listeleme - liste elemanlarının takibi:
  const [ships, setShips] = useState([]);
  // input'a girilen terim (isim/model) takibi
  const [searchTerm, setSearchTerm] = useState("");
  // arama kriterine göre filtrelenen gemiler:
  const [filteredShips, setFilteredShips] = useState([]);
  // seçilen gemi
  const [selectedShip, setSelectedShip] = useState(null);
  // arama sonucu gemi bulunamama durumu:
  const [noResults, setNoResults] = useState(false);
  // router geçmişi (önceki bulunan sayfaya geri dönebilmek için)
  const history = useHistory();

  // başlangıçta axios ile gemileri API'den çekiyoruz
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/starships/")
      .then((res) => {
        // API'den gelen veriye göre ships'in state'ini güncelliyoruz
        setShips(res.data.results);
        // filtrelenen gemilerin başlangıç değeri: tüm gemiler
        setFilteredShips(res.data.results);
      })
      .catch((error) => {
        console.error("Veri alınırken bir hata oluştu.", error);
      });
  }, []);

  // input'a girilen terime göre filtreleme
  useEffect(() => {
    const results = ships.filter(
      (ship) =>
        ship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ship.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredShips(results);
    // boş değer girildiyse sonuç yok göster
    setNoResults(results.length === 0);
  }, [ships, searchTerm]);

  // input'a girilen değere göre güncelleme (buyuk-kucuk harfe duyarli olmayacak sekilde)
  const handleInputChange = (e) => {
    const searchTerm = e.target.value.toLowerCase(); 
    setSearchTerm(searchTerm); // input değerini state'e kaydet
  
    // gemileri filtrele (girilen deger herhangi bir geminin adi veya modeliyle eslesiyorsa)
    const results = ships.filter(
      (ship) =>
        ship.name.toLowerCase().includes(searchTerm) ||
        ship.model.toLowerCase().includes(searchTerm)
    );
    setFilteredShips(results); // filtrelenmis gemi listesini guncelle
    setNoResults(results.length === 0); // sonuc yoksa noResults state'ini true yap
  };

  // bir geminin butonuna tıklandığında, o geminin özelliklerini gösterecek şekilde detail componentine git
  const handleShipSelect = (ship) => {
    setSelectedShip(ship);
    history.push("/detail"); 
  };

  return (
    <Router>
      <div>
        <div className="container">
          <div className="greeting">
            <img src={`/assets/Star-Wars.png`} alt="starwars png" />
            <div className="search">
              <h4>Name/Model</h4>
              <input
                type="text"
                placeholder="Name/Model"
                value={searchTerm}
                onChange={handleInputChange}
              />
              <hr />
            </div>
          </div>

          <section className="main">
            {noResults ? (
              <p>Gemi bulunamadı.</p>
            ) : (
              filteredShips.map((ship, index) => (
                <div key={index} className="content">
                  <img src={shipImages[ship.name]} alt="star ship img" />
                  <Link to="/detail">
                    <button onClick={() => handleShipSelect(ship)}>
                      {ship.name}
                    </button>
                  </Link>
                  <ul className="shipList">
                    <li>
                      <b>Model:</b> {ship.model}
                    </li>
                    <li>
                      <b>Hyperdrive Rating:</b> {ship.hyperdrive_rating}
                    </li>
                  </ul>
                </div>
              ))
            )}
          </section>
        </div>

        <Switch>
          <Route path="/detail">
            <Detail selectedShip={selectedShip} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
