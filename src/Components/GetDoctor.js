import { useEffect, useState } from "react";
import axios from "axios";

const GetDoctor=()=>{

const[Doctor,setDoctor] =useState();

useEffect(() => {
    axios.get("").then((r) => {
     
    });
  }, []);


  return(<></>)

}
export default GetDoctor;