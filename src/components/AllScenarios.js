import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AllScenarios.css";

const AllScenarios = () => {
  const navigate = useNavigate();
  const scenarios = localStorage.getItem("scenarios");

  const [data, setdata] = useState(
    scenarios == null ? [] : JSON.parse(scenarios)
  );

  const [add, setadd] = useState(0);

  const Handledelete = (a) => {
    const Udata = data.filter((ele, i) => {
      return i !== a;
    });

    setdata(Udata);
    localStorage.setItem("scenarios", JSON.stringify(Udata));
  };

  return (
    <div className="container">
      <h1>All Scenario</h1>{" "}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btnadd">Add</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btnreset">Reset</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btngoback" onClick={() => navigate("/addscenario")}>
        Go Back
      </button>
      <div>
        <br></br>
        <table className="mytable">
          <thead>
            <tr>
              <th>Scenario Id</th>
              <th>Scenario Name</th>
              <th>Scenario Time</th>
              <th>Number of Vehicle</th>
              <th>Add Vehicle</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          {data.map((data, i) => (
            <tr>
              <td>{i}</td>
              <td>{data.name}</td>
              <td>{data.seconds}</td>
              <td>{add}</td>
              <td>
                <button onClick={() => navigate("/addvehicle")}>
                  <i class="fi fi-ss-add"></i>
                </button>
              </td>

              <td>
                <button
                  onClick={() => {
                    const id = data.id;
                    navigate(`/editscenario:${id}`);
                  }}
                >
                  <i class="fi fi-ss-pencil"></i>
                </button>
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
    </div>
  );
};

export default AllScenarios;
