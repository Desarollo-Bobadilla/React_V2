const { useState, useEffect } = require("react");

function Joke() {
  const [joke, setJoke] = useState([]);
  const url =
    "https://gateway.marvel.com/v1/public/characters?ts=1635&apikey=67dda2151d85fac2a7c1cee858f94c0d&hash=f45c101eef89fffe4931ba7d94ae2c1c";

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("joke") === null) {
        setJoke("Loading...");
      } else {
        const st = JSON.parse(localStorage.getItem("joke"));
        setJoke(st.data.results);
      }
    } else {
      fetch(url)
        .then((res) => res.json())
        .then((jokes) => {
          setJoke(jokes.data.results);
          localStorage.setItem("joke", JSON.stringify(jokes));
        });
    }
  }, []);

  return (
    <div className="div">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <h1 className="GFG" id="titu">
            Heros
          </h1>
          <hr></hr>
        </div>
        <div className="col-1"></div>
      </div>

      <div className="row test" id="test">
        {joke.map((j) => (
          <div>
            <h3>{j.name}</h3>
            <p>{j.description}</p>
            <img
              src={
                j.thumbnail.path +
                "/portrait_fantastic." +
                j.thumbnail.extension
              }
              alt={j.name}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Joke;
