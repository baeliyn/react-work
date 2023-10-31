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
          /*const girl = [
            "https://miro.medium.com/v2/resize:fit:694/1*Qo1BCYqpLE6bj9kk0x4UIQ.png",
            "https://www.mobilinnov.com/boutique-img/coqueunique/produit/akeno-himejima-high-school-dxd-43249-smartphone-small.jpg",
            "https://pic1.zhimg.com/v2-6aac57a32cdb7b2de0ffb184945d8360_b.jpg",
            "https://i.pinimg.com/736x/d9/37/35/d93735d02eb1b59e6e415de41dd1956d.jpg",
            "https://pbs.twimg.com/media/FkWbtJvXwAEdNVH.jpg",
            "https://i.pinimg.com/1200x/7b/7a/30/7b7a30397cc82329780bf38a19c195bb.jpg",
            "https://i.pinimg.com/1200x/3f/ee/c0/3feec018704ffb14de36a36932fb6046.jpg",
            "https://i.pinimg.com/736x/1b/b3/30/1bb330810ef0df7411d28cb508885314.jpg",
            "https://i.pinimg.com/originals/bb/27/ad/bb27ad7fc4e225f345be74d57c32b2c4.jpg",
          ];*/
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
