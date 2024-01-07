import React from "react";
import Card from "./components/card.js";
import data from "./data";
import "./App.css";

function App() {
  const stylish = {
    cursor: "pointer",
  };

  const [eyyo, differencial] = React.useState(true);
  const [us, usa] = React.useState([
    <span>youd play anybodys game</span>,
    <span> ill just wait ill just wait</span>,
    <span> ill just wait for the novocaine</span>,
    false,
  ]);

  const images = data.map((OG) => {
    return {
      id: OG.id,
      image: OG.imageUrl,
      toggle: OG.toggle,
    };
  });

  const [img, change] = React.useState(images);

  function cardChange(id) {
    change((prev) => {
      const array = [];

      prev.forEach((e) => {
        if (e.id === prev[id].id) {
          const girl = [
            "https://upload.wikimedia.org/wikipedia/commons/0/0f/PuraLuhurUluWatu_view.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/a/a2/View_of_loch_lomond.JPG",
          ];
          const randomgirl = girl[Math.floor(Math.random() * girl.length)];
          const updated = {
            ...e,
            toggle: false,
            image: randomgirl,
          };
          array.push(updated);
        } else {
          array.push(e);
        }
      });
      return array;
    });
  }

  const destroyer = data.map((OG, id) => {
    return (
      <Card key={OG.title} change={cardChange} image={img[id].image} {...OG} />
    );
  });

  const novocaine = function () {
    if (us[us.length - 1] === false) {
      usa((prev) => {
        return [...prev, <p>Fog Lake, Novocaine</p>, true];
      });
    }
  };

  return (
    <>
      {destroyer}
      <div style={stylish} onClick={() => differencial(!eyyo)}>
        {eyyo ? "yes" : "no"}
      </div>
      <div className="novocaine" onClick={novocaine}>
        {us}
      </div>
    </>
  );
}

export default App;
