//Display meal detail from the data that you get in FetchID.
//Most likely youll have to make the ingrediants into an array but do that in the FetchID 

const DisplayMealDetail = ({ mealDetails }) => {
    return(
        <ul>
            {(mealDetails && mealDetails.length > 0) && mealDetails.map((item, idx) => ( // If data.length is higher than 0, map out the array 
                <li key={idx}>
                    {JSON.stringify(item.strMeal)} <br />
                    {/* <img src={item.strMealThumb} alt="Meal image" /> */}
                </li>
            ))}  
        </ul>
    )
}

export default DisplayMealDetail;