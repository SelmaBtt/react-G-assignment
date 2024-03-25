import { useContext, useState, useEffect, useCallback } from "react";
import DisplayMealDetail from "./DisplayMealDetail";
import { OnClickContext } from "../context/OnClickContextProvider";

const FetchID = ({ meal }) => { // We need the meal prop from DisplayResult.jsx
    const { onClickUpdateFunc } = useContext(OnClickContext)
    const [mealDetails, setMealDetails] = useState([])

    useEffect(()=> {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + meal)
        .then(response => {
            // console.log(response)
            if(!response.ok){
                throw Error('Item is unverifiable')
            }
            return response.json();
        })
        .then(data => {
            // console.log(data)
            setMealDetails(data.meals)
            onClickUpdateFunc(false)
        })
        .catch(error => {
            console.error('Error with fetching data:', error.message); //Supposed to show error message with error.message
        })

    }, [onClickUpdateFunc]); // Ska köras när man klickar på den individuella li:n eller fått ID:et


    // BUTTON TOGGLES VISABILITY AND IS CONNECTED TO THIS. 
    // I ONLY WANT THIS FUNCTION TO BE IN MOTION WHEN YOU CLICK ON A LIST AND THE BUTTON IS GENERATED BECAUSE OTHERWISE BTN SHOULDNT EXIST
    const useToggle = () => {
        const [state, setState] = useState(false)
        const toggle = useCallback(() => setState((state) => !state), [])
        return [state, toggle]; 
    }
    const [toggle, setToggle] = useToggle()
    console.log(toggle)

    return(
        <>
            <DisplayMealDetail mealDetails={mealDetails} toggle={toggle} setToggle={setToggle} />
        </>
    )
}

export default FetchID;