import React, { useState } from "react";
import "./AddScenario.css";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const AddScenario = () => {
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [seconds, setseconds] = useState("");

  const Handleform = (e) => {
    if (name.length !== 0) {
      e.preventDefault();
      Call();
      navigate("/allscenarios");
    }
  };
  const Call = () => {
    let storageScenarios = localStorage.getItem("scenarios");
    if (storageScenarios == null) {
      storageScenarios = [];
    } else {
      storageScenarios = JSON.parse(storageScenarios);
    }
    const store = {
      name,
      seconds,
      id: uuidv4(),
    };
    storageScenarios.push(store);
    setname("");
    setseconds("");

    localStorage.setItem("scenarios", JSON.stringify(storageScenarios));
  };

  let btnn = document.querySelector("btnreset");
  console.log(btnn);
  let inputs = document.querySelectorAll("input");

  const Clear = () => {
    inputs.forEach((input) => (input.value = ""));
  };

  return (
    <div className="container">
      <div>
        <h3>Scenario / add</h3>
      </div>
      <div>
        <h1>Add Scenario</h1>
      </div>
      <form className="box">
        <div className="subbox">
          <label>Scenario Name</label>
          <br></br>
          <input
            type="text"
            value={name}
            placeholder="Enter scenario"
            onChange={(e) => setname(e.target.value)}
            required
          ></input>
        </div>
        <div className="subbox">
          <label>Scenario Time(seconds)</label>
          <br></br>
          <input
            type="number"
            value={seconds}
            placeholder="Enter time"
            onChange={(e) => setseconds(e.target.value)}
            required
          ></input>
        </div>

        <div></div>
      </form>
      <br></br>
      <button className="btnadd" onClick={Handleform}>
        Add
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btnreset" onClick={Clear}>
        Reset
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btngoback" onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  );
};

export default AddScenario;
