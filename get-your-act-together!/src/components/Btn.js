function Btn() {
  function gyat() {
    console.log(`gyat`);
  }
  function krrr() {
    console.log(`krrrrt`);
  }
  return (
    <button onClick={gyat} onMouseOver={krrr}>
      gyat
    </button>
  );
}

export default Btn;
