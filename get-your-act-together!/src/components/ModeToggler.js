function Btn() {
  let darkModeOn = false;
  const darkMode = <h1>Dark Mode is On</h1>;
  const lightMode = <h1>Light Mode is On</h1>;

  //   function check() {
  //     if (darkModeOn) {
  //       return <div>{darkMode}</div>;
  //     } else {
  //       return <div>{lightMode}</div>;
  //     }
  //   }

  function change() {
    console.log(darkModeOn);
    darkModeOn = !darkModeOn;
  }

  return (
    <>
      <div>{darkModeOn ? darkMode : lightMode}</div>
      <button onClick={change}>on/off</button>
    </>
  );
}

export default Btn;
