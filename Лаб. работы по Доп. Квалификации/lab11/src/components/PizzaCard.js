import React, { useState } from "react";
import pizzaImage from "../images/pizza.jpg";

function PizzaCard({ title, text, price }) {
    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(prevCounter => prevCounter + 1);

    const decrement = () => {
        if (counter > 0) {
            setCounter(prevCounter => prevCounter - 1);
        }
    };

    const submitButtonOnClick = (event) => {
        alert(`Количество заказанного товара: ${counter}`);
    };  

    return (
        <div className="container">
            <img src={pizzaImage} alt="Пицца" className="container_picture"/>
            <h2 className="container_title">{title}</h2>
            <p className="container_text">{text}</p>
            <select id="pizza_diameter" className="choise_diameter" defaultValue="Диаметр">
                <option disabled>Диаметр</option>
                <option>30 см</option>
                <option>45 см</option>
                <option>60 см</option>
            </select>
            <p className="price">от {price}</p>
            <form className="container_1" onSubmit={submitButtonOnClick}>
                <input type="button" value="-" className="container_1_decrement" onClick={decrement} />
                <input id="quantity" type="text" value={counter} className="container_1_amount" readOnly />
                <input type="button" value="+" className="container_1_increment" onClick={increment} />
                <button type="submit" className="button_busket"></button>
            </form>
        </div>
    );
}

export default PizzaCard;
