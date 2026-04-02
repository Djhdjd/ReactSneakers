import { useEffect, useState } from "react";
import axios from "axios";
import { FiSearch, FiHeart } from "react-icons/fi";
import Banner from "../components/Banner";
import "../assets/style.css";

function MainPage() {
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const response = await axios.get("https://f468684b9fb74495.mokky.dev/sneakerslist");
        setItems(response.data);
      } catch (error) {
        console.log("Ошибка при получении данных:", error);
      }
    };

    fetchSneakers();
  }, []);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="wrapper">
      <div className="content">
        <Banner />

        <div className="content__top">
          <h1 className="content__title">
            {searchValue ? `Поиск: ${searchValue}` : "Все кроссовки"}
          </h1>

          <div className="search-block">
            <FiSearch size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Поиск..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>

        <div className="cards">
          {filteredItems.map((item) => (
            <div className="card" key={item.id}>
              <button className="card__favorite">
                <FiHeart size={16} />
              </button>

              <img
                className="card__image"
                src={item.imageUrl}
                alt={item.title}
              />

              <h5 className="card__title">{item.title}</h5>

              <div className="card__bottom">
                <div className="card__price-block">
                  <span>Цена:</span>
                  <b>{item.price.toLocaleString("ru-RU")} руб.</b>
                </div>

                <button className="card__add">+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;