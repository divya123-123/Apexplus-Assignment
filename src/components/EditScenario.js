import React, { useState } from "react";
import "./AddScenario.css";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const EditScenario = () => {
  const navigate = useNavigate();

  let { id } = useParams();

  const scenarios = JSON.parse(localStorage.getItem("scenarios"));

  console.log(scenarios);
  const result = scenarios.find(({ id }) => id === id);

  const [name, setname] = useState("");
  const [seconds, setseconds] = useState("");

  const Handleform = (e) => {
    navigate("/allscenarios");
  };

  return (
    <div className="container">
      <div>
        <h3>Scenario/Edit</h3>
      </div>
      <div>
        <h1>Edit Scenario</h1>
      </div>
      <div className="box">
        <div className="subbox">
          <label>Scenario Name</label>
          <br></br>

          <input
            type="text"
            value={result.name}
            onChange={(e) => setname(e.target.value)}
            required
          ></input>
        </div>
        <div className="subbox">
          <label>Scenario Time(seconds)</label>
          <br></br>
          <input
            type="number"
            value={result.seconds}
            placeholder="10"
            onChange={(e) => setseconds(e.target.value)}
            required
          ></input>
        </div>
        <div></div>
      </div>
      <br></br>
      <button className="btnadd" onClick={Handleform}>
        Update
      </button>
    </div>
  );
};

export default EditScenario;
