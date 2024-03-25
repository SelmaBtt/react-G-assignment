//Display meal detail from the data that you get in FetchID.
//Most likely youll have to make the ingrediants into an array but do that in the FetchID 

import ConvertObjToArr from "./ConvertObjToArr";
import styled from '../stylesheets/DisplayMealDetail.module.css'
import { OnClickContext } from "../context/OnClickContextProvider";
import { useContext } from "react";

const DisplayMealDetail = ({ mealDetails }) => {
    const { booleanVal, onClickUpdateFunc } = useContext(OnClickContext)

    return(
        <>
            {booleanVal && (
                <div className={styled.divWrapper}>
                    <div className={styled.btnDiv}>
                        <button className={styled.buttonVisability} onClick={() => onClickUpdateFunc(false)}>❌</button>
                    </div>
                    <ul className={styled.ulElement}>
                        {(mealDetails && mealDetails.length > 0) && mealDetails.map((item, idx) => ( // If data.length is higher than 0, map out the array 
                            <li className={styled.liH2Titles} key={idx}>
                                <h1 className={styled.detailTitle}>{item.strMeal}</h1> 
                                <h2>Chategory:</h2>
                                {item.strCategory} 
                                <h2>Country: </h2> 
                                {item.strArea}
                                <h2>Measurments: </h2>
                                <ConvertObjToArr mealObj={item} />
                                <h2>Instructions: </h2>
                                {item.strInstructions}
                                <h2>Tags: </h2>
                                {item.strTags && item.strTags}
                            </li>
                        ))}  
                    </ul>
                </div>
            )}
        </>
    )
}

export default DisplayMealDetail;