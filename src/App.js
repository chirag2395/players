import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import ViewPlayers from "./ViewPlayers.js";
import "./style.css";

function App() {
  //const initialVal = { name: "", fathername: "", age: "" };
  const [players, setPlayers] = useState([]);
  const [flag, setFlag] = useState(false);
  const [formError, setError] = useState({});

  const [formVal, setformVal] = useState({
    id: "",
    name: "",
    fathername: "",
    age: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setformVal({ ...formVal, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setPlayers([...players, formVal]);
    // const players = [formVal];
    setError(validation(formVal));

    setFlag(true);
  };
  const validation = (values) => {
    console.log(values);
    const errors = {};
    if (!values.id) {
      errors.id = "ID field cannot be empty";
    }
    if (!values.name) {
      errors.name = "name field cannot be empty";
    }
    if (!values.fathername) {
      errors.fathername = "fathername field cannot be empty";
    }
    if (!values.age) {
      errors.age = "age field cannot be empty";
    }

    return errors;
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
    <div className="body">
      {flag ? <p>enrolled</p> : <p>not enrolled because fields are empty</p>}
      <form className="form">
        <label className="labels">
          ID:
          <input
            className="fields"
            type="text"
            name="id"
            value={formVal.id}
            onChange={handleChange}
          ></input>
        </label>
        <p>{formError.id}</p>
        <label className="labels">
          NAME:
          <input
            type="text"
            name="name"
            value={formVal.name}
            onChange={handleChange}
          ></input>
        </label>
        <p>{formError.name}</p>
        <label className="labels">
          FATHER NAME:
          <input
            type="text"
            name="fathername"
            value={formVal.fathername}
            onChange={handleChange}
          ></input>
        </label>
        <p>{formError.fathername}</p>
        <label className="labels">
          AGE:
          <input
            type="text"
            name="age"
            value={formVal.age}
            onChange={handleChange}
          ></input>
        </label>
        <p>{formError.age}</p>
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
