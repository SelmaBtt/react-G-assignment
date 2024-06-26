import FetchID from "./FetchID";
import { useContext, useState } from "react";
import { OnClickContext } from "../context/OnClickContextProvider";
import styles from '../stylesheets/DisplayResult.module.css'

const DisplayResults = ({ data }) => {
    const { booleanVal, onClickUpdateFunc } = useContext(OnClickContext)
    const [meal, setMeal] = useState(null)

    const getName = (item) => {
        setMeal(item.strMeal)
        onClickUpdateFunc(true)
    }

    return(
        <>
            <ul className={styles.ulWrapper}>
                {(data && data.length > 0) ? (data.map((item, idx) => ( // If data.length is higher than 0, map out the array 
                    <li className={styles.liElement} onClick={() => getName(item)} key={idx}>
                        <img className={styles.imgElement} src={item.strMealThumb} alt="Meal image" /> <br />
                        <h1>{item.strMeal}</h1>
                    </li>
                ))): (
                <li><h1>No result found :(</h1></li>
                )}  
            </ul>
            { booleanVal && <FetchID meal={meal} /> }
        </>
    )
}

export default DisplayResults;