import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ViewPlayers from "./ViewPlayers.js";

function App() {
  //const initialVal = { name: "", fathername: "", age: "" };
  const [players, setPlayers] = useState([]);

  const [formVal, setformVal] = useState({
    id: 1,
    name: "chirag",
    fathername: "jaga",
    age: "23",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setformVal({ ...formVal, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setPlayers([...players, formVal]);
    // const players = [formVal];
  };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <pre>{JSON.stringify(formVal, undefined, 2)}</pre>

      <form>
        <label>
          ID:
          <input
            type="text"
            name="id"
            value={formVal.id}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          NAME:
          <input
            type="text"
            name="name"
            value={formVal.name}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          FATHER NAME:
          <input
            type="text"
            name="fathername"
            value={formVal.fathername}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          AGE:
          <input
            type="text"
            name="age"
            value={formVal.age}
            onChange={handleChange}
          ></input>
        </label>
        {/* <label>
          {" "}
          SEX:
          <label>male</label>
          <input type="radio" name="gender" value="male" />
          <label>female</label>
          <input type="radio" name="gender" value="female" />
        </label> */}
        <button type="submit" onClick={handleSubmit}>
          {" "}
          SUBMIT
        </button>
      </form>
      {players.map((player, index) => {
        return <ViewPlayers key={index} player={player} />;
      })}
    </div>
  );
}

export default App;
