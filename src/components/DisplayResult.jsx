import FetchID from "./FetchID";
import { useState } from "react";

const DisplayResults = ({ data }) => {
    const [mealID, setMealID] = useState(null)
    const [clickOccured, setClickOccured] = useState(false)

    const getID = (item) => {
        setMealID(item.idMeal)
        // console.log(mealID)
        setClickOccured(true)
    }

    return(
        <>
            <ul>
                {(data && data.length > 0) && data.map((item, idx) => ( // If data.length is higher than 0, map out the array 
                    <li onClick={() => getID(item)} key={idx}>
                        {JSON.stringify(item.strMeal)} <br />
                        <img src={item.strMealThumb} alt="Meal image" />
                    </li>
                ))}  
            </ul>
            <FetchID mealID={mealID} setClickOccured={setClickOccured} />
        </>
    )
}

export default DisplayResults;