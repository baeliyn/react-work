import Skirb from "./components/skirb";
import React from "react";
import Form from "./components/form";
import "./App.css";

function App() {
  const [i, setImage] = React.useState({
    n: 1,
    image:
      "https://i.pinimg.com/736x/29/ca/3c/29ca3c3994ba89e410ee3f7ba9715d38.jpg",
  });

  const [formData, setFormData] = React.useState({
    checked: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function clearState() {
    setFormData((prevData) => {
      return {
        ...prevData,
        checked: false,
      };
    });
  }

  function setSmth() {
    clearState();
    setImage((prev) => {
      if (prev.n % 2 == 0) {
        return {
          n: prev.n + 1,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/a/a2/View_of_loch_lomond.JPG",
        };
      } else if (prev.n % 3 == 0) {
        return {
          n: prev.n + 1,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/7/72/Beautiful_hill_view.jpg",
        };
      } else {
        return {
          n: prev.n + 1,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/f/fc/Daisy%27s_eye_view.jpg",
        };
      }
    });
  }

  return (
    <>
      <Skirb img={i.image} onHandle={setSmth} />
      <Form data={formData} handle={handleChange} />
    </>
  );
}

export default App;
