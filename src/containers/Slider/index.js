import React, { useEffect, useState } from "react"; // ajout de React
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { byDateDesc } = useData();
  const [index, setIndex] = useState(0);

  const nextCard = () => {
     setTimeout(
      () => setIndex(index < byDateDesc.length -1 ? index + 1 : 0), // Ajout de "-1 " à byDateDesc.length l'index max ne peut pas etre égale à la longueur (index n°1 = 0)
      5000
    );
  };

  useEffect(() => {
    nextCard();
  });

  function displayMonth(date) {
  const d = new Date(date)
  const monthOfDate = getMonth(d)
  return monthOfDate
  }

  return (
    <div key="0" alt="0" className="SlideCardList">
      {byDateDesc?.map((focus, idx) => (
        <React.Fragment key={focus.id}>
          <div
            key={`${focus.id} - SlideCard`}
            alt={`${focus.id} - SlideCard`}
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={focus.cover} alt="forum"/>
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{focus.title}</h3>
                <p>{focus.description}</p>
                <div>{displayMonth(focus.date)}</div>
              </div>
            </div>
          </div>        
          <div 
            className="SlideCard__paginationContainer" 
            key={`${focus.title} - pagination`} 
            alt={`${focus.title} - pagination`}
            >
            <div className="SlideCard__pagination">
              {byDateDesc?.map((focusRadio, radioIdx) => (
                <input
                  key={focusRadio.id}
                  alt={focusRadio.id}
                  type="radio"
                  name="radio-button"
                  checked={radioIdx === index} // Modification de la variable "idx" par "index" = state pour que le bouton radio soit checked
                  readOnly
                  />
              ))}
            </div>
          </div>  
        </React.Fragment>
      ))}
    </div>
    )
};




export default Slider;
