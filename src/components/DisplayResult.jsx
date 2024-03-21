import FetchID from "./FetchID";
import { useContext, useState } from "react";
import { OnClickContext } from "../context/OnClickContextProvider";

const DisplayResults = ({ data }) => {
    const { onClickUpdateFunc } = useContext(OnClickContext)

    const [meal, setMeal] = useState(null)
    // const [clickOccured, setClickOccured] = useState(false)

    const getName = (item) => {
        setMeal(item.strMeal)
        // console.log(meal)
        // setClickOccured(true)
        onClickUpdateFunc(true)
    }

    return(
        <>
            <ul>
                {(data && data.length > 0) && data.map((item, idx) => ( // If data.length is higher than 0, map out the array 
                    <li onClick={() => getName(item)} key={idx}>
                        {JSON.stringify(item.strMeal)} <br />
                        <img src={item.strMealThumb} alt="Meal image" />
                    </li>
                ))}  
            </ul>
            <FetchID meal={meal} />
            {/* setClickOccured={setClickOccured} */}
        </>
    )
}

export default DisplayResults;