

const DisplayResults = ({ data }) => {
    return(
        <>
            <ul>
                {(data && data.length > 0) && data.map((item, idx) => ( // If data.length is higher than 0, map out the array 
                    <li key={idx}>
                        {JSON.stringify(item.strMeal)} <br />
                        <img src={item.strMealThumb} alt="Meal image" />
                    </li>
                ))}  
            </ul>
        </>
    )
}

export default DisplayResults;