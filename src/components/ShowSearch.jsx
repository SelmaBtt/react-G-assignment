import { useRef, useState } from "react"
import FetchAPI from "./FetchAPI"

const ShowSearch=({ data, setSearchOccured, setSearchInputValue })=> {
    
    const searchInput = useRef()
    // const [recipes, setRecipes] = useState([])

    const fetchData = () => {
        setSearchOccured(true)
    }

    return(
        <>
            <input ref={searchInput} onChange={() => setSearchInputValue(searchInput.current.value)} type="text" />
            <button onClick={fetchData}>Search</button>

            <ul>
                {(data && data.length > 0) && data.map((item, idx) => (
                    <li key={idx}>
                        {JSON.stringify(item)}
                        {/* Börja hämta ut bilder samt namnet utifrån item */}
                    </li>
                ))}  
            </ul>
        </>
    )
}

export default ShowSearch