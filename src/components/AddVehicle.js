import React, { useState } from "react";
import "./AddVehicle.css";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const AddVehicle = () => {
  const navigate = useNavigate();

  const [vname, setvname] = useState("");
  const [speed, setspeed] = useState("");
  const [x, setx] = useState("");
  const [y, sety] = useState("");
  const [selectscenario, setselectscenario] = useState("");
  const [position, setposition] = useState("");

  const scenarios = localStorage.getItem("scenarios");

  const [Scenarios] = useState(scenarios == null ? [] : JSON.parse(scenarios));

  const Vehicle = localStorage.getItem("vehicle");
  const [data, setdata] = useState(Vehicle == null ? [] : JSON.parse(Vehicle));

  let btnn = document.querySelector("btnreset");

  let inputs = document.querySelectorAll("input");

  const Clear = () => {
    inputs.forEach((input) => (input.value = ""));
  };

  const Handleform = (e) => {
    if (x.length !== 0) {
      e.preventDefault();
      Call();
    }
  };

  const Call = () => {
    let VehicleScenarios = localStorage.getItem("vehicle");
    if (VehicleScenarios == null) {
      VehicleScenarios = [];
      console.log("VehicleScenarios");
    } else {
      VehicleScenarios = JSON.parse(VehicleScenarios);
    }

    const store = {
      scenarioId: selectscenario,
      id: uuidv4(),
      vname,
      speed,
      x,
      y,
      position,
    };
    VehicleScenarios.push(store);
    setx("");
    sety("");
    localStorage.setItem("vehicle", JSON.stringify(VehicleScenarios));

    navigate("/");
  };

  return (
    <div className="container">
      <div>
        <h3>Vehicle / add</h3>
      </div>
      <div>
        <h1>Add Vehicle</h1>
      </div>
      <div className="box">
        <div className="subbox">
          <label>Scenario List</label>
          <br></br>

          <select
            onClick={(e) => {
              setselectscenario(e.target.value);
            }}
          >
            <option>select Direction</option>
            {Scenarios.map((data) => (
              <option value={data.id}>{data.name}</option>
            ))}{" "}
          </select>
        </div>
        <div className="subbox">
          <label>Vehicle Name</label>
          <br></br>
          <input
            type="text"
            value={vname}
            placeholder="10"
            onChange={(e) => setvname(e.target.value)}
            required
          ></input>
        </div>
        <div className="subbox">
          <label>Speed</label>
          <br></br>
          <input
            type="number"
            value={speed}
            placeholder="10"
            onChange={(e) => setspeed(e.target.value)}
            required
          ></input>
        </div>
      </div>
      <div className="box">
        <div className="subbox">
          <label>Position X</label>
          <br></br>
          <input
            type="number"
            value={x}
            placeholder="10"
            onChange={(e) => setx(e.target.value)}
            required
          ></input>
        </div>
        <div className="subbox">
          <label>Position Y</label>
          <br></br>
          <input
            type="number"
            value={y}
            placeholder="10"
            onChange={(e) => sety(e.target.value)}
            required
          ></input>
        </div>
        <div className="subbox">
          <label>Direction</label>
          <select
            onClick={(e) => {
              setposition(e.target.value);
              console.log(e.target.value);
            }}
          >
            <option>select Direction</option>
            <option value="Towards">Towards</option>
            <option value="Backwards">Backwards</option>
            <option value="upwards">upwards</option>
            <option value="Downwards">Downwards</option>
          </select>
        </div>
      </div>
      <br></br>
      <button className="btnadd" onClick={Handleform}>
        Add
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btnreset" onClick={Clear}>
        Reset
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btngoback" onClick={() => navigate("/addscenario")}>
        Go Back
      </button>
    </div>
  );
};

export default AddVehicle;
