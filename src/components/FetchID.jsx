import { useState, useEffect } from "react";
import DisplayMealDetail from "./DisplayMealDetail";

const FetchID = ({ mealID, setClickOccured }) => { // We need the mealID prop from DisplayResult.jsx
    const [mealDetails, setMealDetails] = useState(null)

    useEffect(()=> {
        fetch('www.themealdb.com/api/json/v1/1/search.php?f=' + mealID)
        .then(response => {
            console.log(response)
            if(!response.ok){
                throw Error('Item is unverifiable')
            }
            return response.json();
        })
        .then(data => {
            console.log(data.meals)
            setMealDetails(data.meals)
        })
        .catch(error => {
            // console.log(error.message); //Supposed to show error message with error.message
            setClickOccured(false)
        })

    }, [mealID]); // Ska köras när man klickar på den individuella li:n eller fått ID:et

    return(
        <>
            <DisplayMealDetail mealDetails={mealDetails}/>
        </>
    )
}

export default FetchID;