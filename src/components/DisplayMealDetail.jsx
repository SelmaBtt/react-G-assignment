//Display meal detail from the data that you get in FetchID.
//Most likely youll have to make the ingrediants into an array but do that in the FetchID 

import ConvertObjToArr from "./ConvertObjToArr";
import styled from '../stylesheets/DisplayMealDetail.module.css'
import React, { useState, useCallback } from 'react';

const DisplayMealDetail = ({ mealDetails }) => {
    const useToggle = (initalState = true) => {
        const [state, setState] = useState(initalState)
        const toggle = useCallback(() => setState((state) => !state), [])
        return [state, toggle]; 
    }
    const [toggle, setToggle] = useToggle()

    return(
        <>
            <button className={styled.buttonVisability} onClick={() => setToggle(toggle)}>❌</button>
            
            {toggle && (
                <ul className={styled.ulWrapper}>
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
            )}
        </>
    )
}

export default DisplayMealDetail;