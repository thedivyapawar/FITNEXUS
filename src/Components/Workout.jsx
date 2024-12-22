import { useEffect } from "react";
import { exerciseObj } from "../Utils/RapidApiConfig"
import Shimmer from "./Shimmer";
import { useState } from "react";
import back from '../assets/Images/back.png'
import cardio from '../assets/Images/cardio.png'
import chest from '../assets/Images/chest.png'
import neck from '../assets/Images/neck.png'
import waist from '../assets/Images/waist.png'
import shoulders from '../assets/Images/shoulders.png'
import lowerArms from '../assets/Images/lower-arm.png'
import upperArms from '../assets/Images/upper-arm.png'
import lowerLegs from '../assets/Images/lower-leg.png'
import upperLegs from '../assets/Images/upper-leg.png'
import { useNavigate } from "react-router-dom";

function Workout() {

    const Images ={
      "back" : back,
      "cardio" : cardio,
      "chest" : chest,
      "neck" : neck,
      "shoulders" : shoulders,
      "waist" : waist,
      "lower arms" : lowerArms,
      "upper arms" : upperArms,
      "lower legs" : lowerLegs,
      "upper legs": upperLegs,
    }

    const[bodyPart, setBodyPart]=useState([]);
    const[loader,setLoader]=useState(true);
    const myNavigate = useNavigate();

    useEffect(()=>{
        getData();
    },[])

    async function getData(){
    const response =  await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseObj )
     const result = await response.json();
     setBodyPart(result);
     setLoader(false);
    }

    function redirectExercise(bodypart){
        myNavigate(`/exercise/${bodypart}`)
    }

    return (
      <>
       {
        loader == true ? <Shimmer/> : (
         <div className="row justify-content-evenly my-4 mx-2 px-2 px-md-0">
          {
            bodyPart.map((items , index)=>{
              return(
                  <div className="col-md-2 d-flex justify-content-center p-4 rounded-5 mx-1 my-3 shimmer-box" key={index} onClick={()=>{
                    redirectExercise(items)
                  }}>

                      <img src={Images[items]}  className="img-fluid" />
                  </div>
              )
             })
          }
         </div>
        )
       }
      </>
    )
  }
  
  export default Workout