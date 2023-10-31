function Main(props) {
  const url =
    "https:/deletethis/pbs.twimg.com/ext_tw_video_thumb/1654178961788682271/pu/img/Y0wFv9PwG6xjlibD.jpg:large";

  return (
    <>
      <h1>{props.gyat}</h1>
      <img src={url} alt="gyat" />
    </>
  );
}

export default Main;
