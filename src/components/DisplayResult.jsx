import FetchID from "./FetchID";

const DisplayResults = ({ data }) => {

    const getID = (item) => {
        console.log(item.idMeal)
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
            {/* <FetchID individualMealID={} /> Meal id that we get from the ID function */}
        </>
    )
}

export default DisplayResults;