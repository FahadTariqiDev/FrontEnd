import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Articles from "./Components/Articales/Articles";

function App() {
  // When the user scrolls down 20px from the top of the document, show the button
  // let mybutton = document.getElementById("my");
  // console.log(mybutton);
  // window.onscroll = function () {
  //   scrollFunction();
  // };
  // function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 20 ||
  //     document.documentElement.scrollTop > 20
  //   ) {
  //     mybutton.style.display = "block";
  //   } else {
  //     mybutton.style.display = "none";
  //   }
  // }
  return (
    <>
      <div className="app-main-container">
        <Navbar />
        <div className="hero-main-container">
          <Hero />
        </div>
        {/* <div className="TEST">mslkmb</div> */}

        <div className="main-page-content">

        <div>
          <Articles />
        </div>
        <div>vdfgsfndblvn </div>
        </div>
        
      </div>
    </>
  );
}

export default App;
