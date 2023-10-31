import "./App.css";
import Header from "./components/Heading";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Card from "./components/Card";

function returnP() {
  return <p>Page</p>;
}

function App() {
  return (
    <>
      <Header name="skirb ~" gyat="imskirby" />
      <Main gyat="imskirby" />
      <Footer gyat="imskirby" g={returnP()} />
      <Card />
    </>
  );
}

export default App;
