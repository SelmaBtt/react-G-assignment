import { useRef, useState } from "react"
import FetchAPI from "./FetchAPI"

const ShowSearch=({ data, setSearchOccured, setSearchInputValue })=> {
    
    const searchInput = useRef() // "searchInput" value is set to the prop "setSearchInputValue"
    // const [recipes, setRecipes] = useState([]) // This intended function is moved to FetchAPI.jsx 

    const fetchDataBtn = () => {
        setSearchOccured(true) //FetchAPI.jsx has the button content. When button is pressed -> useEffect dependency array has the "searchOccured" as a dependency 
    }

    return(
        <>
            <input ref={searchInput} onChange={() => setSearchInputValue(searchInput.current.value)} type="text" /> {/* "onChange"=eveytime change happens in the input. "setSeachInputValue" is a useState prop from FetchAPI.jsx, is the value that affects the API */}
            <button onClick={fetchDataBtn}>Search</button>

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

export default ShowSearch;