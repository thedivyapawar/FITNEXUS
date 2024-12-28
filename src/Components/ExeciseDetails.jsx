import { useEffect } from "react"
import { exerciseObj } from "../Utils/RapidApiConfig"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useFetchData from "../Hooks/fetchData"

function ExerciseDetails(){

    const {id} = useParams()
    const[data,setData] = useState(null);
    const[loader,setLoader]= useState(false)
    const backnavigate = useNavigate();

    useEffect(()=>{
        fetchData()
    },[])

    async function fetchData(){
    //    const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseObj);
    //    const result = await response.json()
       const data = await useFetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`)
       setData(data)
       setLoader(false)
    }

    function backToExercise(){
        backnavigate(`/exercise/${data?.bodyPart}`)
    }


    return(
        <>
        {
            loader == true ? <Shimmer/> : (
                <div className="row justify-content-center gap-5 mx-4 mx-md-0 mt-md-4">

                    <h1 className="fw-bolder font-contact text-center mt-5 mt-md-3" style={{color:"#b775db"}}>INSTRUCTIONS</h1>

                    <div className="col-md-5 col-lg-4 rounded-5 border d-flex justify-content-center">
                    <img src={data?.gifUrl} className="img-fluid"/>
                    </div>

                    <div className="col-md-5 border rounded-5 p-4 ">
                        {
                            data?.instructions?.map((items,index)=>{
                                return(
                                    <p className="my-4" key={index}>
                                       <i class='bx bx-right-arrow-circle me-2 fs-5' style={{color:"#b775db"}} ></i>
                                        {items}</p>
                                )
                            })
                           
                        }
                    </div>

                   <div className="col-6 col-md-3 mb-5" >
                   <button className="get-started " style={{backgroundColor:"#b775db"}} 
                   onClick = {
                    backToExercise
                   }
                   >Back to Exercises</button>
                   </div>

                </div>
            )
        }     
        </>
    )
}

export default ExerciseDetails