import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  const Vehicle = localStorage.getItem("vehicle");
  const [data, setdata] = useState(Vehicle == null ? [] : JSON.parse(Vehicle));

  const scenarios = localStorage.getItem("scenarios");
  const [Scenarios] = useState(scenarios == null ? [] : JSON.parse(scenarios));

  const [setselectscenario] = useState("");

  const Handledelete = (a) => {
    const Udata = data.filter((ele, i) => {
      return i !== a;
    });

    setdata(Udata);
    localStorage.setItem("vehicle", JSON.stringify(Udata));
  };

  return (
    <div className="container">
      All Scenarios<br></br>
      <br></br>
      <select
        onClick={(e) => {
          setselectscenario(e.target.value);
        }}
      >
        <option>select Direction</option>
        {Scenarios.map((data, id) => (
          <option value={data.id}>{data.name}</option>
        ))}{" "}
      </select>
      <br></br>
      <div>
        <br></br>
        <table className="mytable">
          <thead>
            <tr>
              <th>Vehicle Id</th>
              <th>Vehicle Name</th>
              <th>Position X</th>
              <th>Position Y</th>
              <th>Speed</th>
              <th>Direction</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          {data.map((data, i) => (
            <tr>
              <td>{1 - i}</td>
              <td>{data.vname}</td>
              <td>{data.x}</td>
              <td>{data.y}</td>
              <td>{data.speed}</td>
              <td>{data.position}</td>
              <td>
                <NavLink to="/addscenario">
                  <button
                    onClick={() => {
                      navigate(`/addvehicle`);
                    }}
                  >
                    <i class="fi fi-ss-pencil"></i>
                  </button>
                </NavLink>
              </td>
              <td>
                <button onClick={() => Handledelete(i)}>
                  <i class="fi fi-ss-trash"></i>
                </button>
              </td>
              <div></div>
            </tr>
          ))}
        </table>
      </div>
      <br></br>
      <div className="buton">
        <button className="btnstart">Start Simulation</button>
        <button className="btnstop">Stop Simulation</button>
      </div>
      <br></br>
      <div className="homebox"></div>
    </div>
  );
};

export default Home;
