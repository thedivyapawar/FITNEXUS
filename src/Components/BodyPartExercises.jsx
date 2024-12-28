import { useNavigate, useParams } from "react-router-dom"
import Shimmer from "./Shimmer";
import { exerciseObj } from "../Utils/RapidApiConfig";
import { useEffect, useState } from "react";
import useFetchData from "../Hooks/fetchData";

function BodyPartExercises(){

    const { bodypart } = useParams();
    console.log(bodypart);
    const[data,setData] = useState(null);
    const [loader,setLoader] = useState(true);
    const detailnavigate = useNavigate();

    useEffect(()=>{
        fetchData();
    },[])

    async function fetchData(){
    //    const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`, exerciseObj )
    //    const result = await response.json()

       const data = await useFetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`)
       setData(data)
       setLoader(false)
    }

    function redirectDetails(id){
       detailnavigate(`/bodypart/${id}`)
    }

    return(
        <>
        {
            loader == true ? <Shimmer/> : (
                <div className="row justify-content-evenly px-3 me-3 my-0 my-md-4 mx-md-3"
                >
                    <h1 className="fw-bolder font-contact text-center mt-5 mt-md-3 mb-3" style={{color:"#b775db"}}>DISCOVER CURATED EXERCISES</h1>
                    {
                        data?.map((item,index)=>{
                            return(
                            <div className="col-md-3 col-lg-2 border mx-3 my-3 rounded-5 px-3 pb-2 pb-lg-0 shimmer-box2 pointer" key={index} onClick={() => redirectDetails(item.id)}>

                                <img src={item.gifUrl} className="img-fluid"/>
                                <h1 className="fs-5 text-center fw-bold"> {item.name.toUpperCase()}</h1>
                                <h3 className="fs-6 text-center">Target : {item.target.toUpperCase()}</h3>
                                <h3 className="fs-6 text-center"> Equipment : {item.equipment.toUpperCase()}</h3>
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

export default BodyPartExercises