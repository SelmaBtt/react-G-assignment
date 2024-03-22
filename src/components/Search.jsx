import { useRef, useContext } from "react"
import { OnClickContext } from "../context/OnClickContextProvider";

const Search=({ setSearchInputValue })=> {
    const { onClickUpdateFunc } = useContext(OnClickContext)
    
    const searchInput = useRef() // "searchInput" value is set to the prop "setSearchInputValue"
    // const [recipes, setRecipes] = useState([]) // This intended function is moved to FetchAPI.jsx 

    const fetchDataBtn = () => {
        onClickUpdateFunc(true)
    }

    return(
        <>
            <input ref={searchInput} onChange={() => setSearchInputValue(searchInput.current.value)} type="text" /> {/* "onChange"=eveytime change happens in the input. "setSeachInputValue" is a useState prop from FetchAPI.jsx, is the value that affects the API */}
            <button onClick={fetchDataBtn}>Search</button>
        </>
    )
}

export default Search;