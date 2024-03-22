import { useState } from "react"

const ConvertObjToArr = ({ mealObj }) => {
    const ingredientsAndMeasures = Object.keys(mealObj)
    .filter(key => key.startsWith('strIngredient') && mealObj[key])
    .map((key, index) => `${mealObj[`strMeasure${index + 1}`]} ${mealObj[key]}`)
    .filter(combined => combined.trim() !== ''); // Om strängen inte är tom (efter att vi har trimmat bort whitespaces) så ska den ingå i resultatet

    console.log("ingredientsAndMeasures " + ingredientsAndMeasures)


    return(
        <>
            {(ingredientsAndMeasures && ingredientsAndMeasures.length > 0) && ingredientsAndMeasures.map((item, idx) => ( // If data.length is higher than 0, map out the array 
                <li key={idx}>
                    {item}
                </li>
            ))}
        </>
    )
}

export default ConvertObjToArr;