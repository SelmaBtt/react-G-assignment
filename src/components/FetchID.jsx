import { useState } from "react";

const FetchID = () => { // We need the mealID prop from DisplayResult.jsx

    const [mealID, setMealID] = useState() // Set the 

    useEffect(()=> {
        fetch('www.themealdb.com/api/json/v1/1/search.php?f=' + mealID)
        .then(response => {
            if(!response.ok){
                throw Error('Item is unverifiable')
            }
            return response.json();
        })
        .then(data => {
            setMealID() //data.idk
        })
        .catch(error => {
            console.log(error.message); //Supposed to show error message with error.message
        })

    }, []); // Ska köras när man klickar på den individuella li:n eller fått ID:et

    return(
        <>
        </>
    )
}

export default FetchID;