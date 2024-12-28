import { exerciseObj } from "../Utils/RapidApiConfig";

async function useFetchData(url){
   const response = await fetch(url, exerciseObj)
   const result = await response.json()
   console.log(result);
   
   return result
}

export default useFetchData;