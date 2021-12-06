import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import line from "./images/line.png";
import Card from "./Components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import MainCard from "./Components/MainCard";
import AddDoctorRecord from "./Components/AddDoctorRecord";

function App() {
  const [doctor, setDoctor] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/doctor").then((r) => {
      //   مثال
      console.log(r);
      console.log(r.data);

      setDoctor(r.data);
      //console.log(r.data)
    });
  }, []);
  return (
    <>
      <div className="main-container">
        <div>
          <Hero />
        </div>
        <div>
          <Navbar />
        </div>
        <div className="best-doctors">
          <div>
            <img className="line-style" src={line} />
            <h1 className="OBD">top doctors on the site</h1>
          </div>
          <div className="mainpage-card-container">
            {doctor.map((e) => {
              return <Card data={e} />;
            })}
            {/* <AddDoctorRecord /> */}
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;
