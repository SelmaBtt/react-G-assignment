//Display meal detail from the data that you get in FetchID.
//Most likely youll have to make the ingrediants into an array but do that in the FetchID 

import ConvertObjToArr from "./ConvertObjToArr";

const DisplayMealDetail = ({ mealDetails }) => {
    return(
        <ul>
            {(mealDetails && mealDetails.length > 0) && mealDetails.map((item, idx) => ( // If data.length is higher than 0, map out the array 
                <li key={idx}>
                    {item.strMeal} <br />
                    {item.strCategory} <br />
                    {item.strArea} <br />
                    {item.strInstructions} <br />
                    {item.strTags && item.strTags} <br />
                    <ConvertObjToArr mealObj={item} />
                </li>
            ))}  
        </ul>
    )
}

export default DisplayMealDetail;