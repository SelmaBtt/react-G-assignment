import { useEffect, useState } from "react"
import Search from "./Search";
import DisplayResults from "./DisplayResult";

const FetchAPI=()=> {
    const [food, setFood] = useState([])
    const [searchOccured, setSearchOccured] = useState(false) // Becomes a prop to the Search.jsx for boolean button
    const [searchInputValue, setSearchInputValue] = useState(null) // Becomes a prop for the API search, is the input value

    useEffect(()=> {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchInputValue)
        .then(response => {
            if(!response.ok){
                throw Error('The item youre searching for doesnt exist') //This error is for non existent input search item
            }
            return response.json();
        })
        .then(data => {
            setFood(data.meals)
            setSearchOccured(false) // Resets the button so it isnt always on (i.e always on true)
        })
        .catch(error => {
            console.log(error.message); //Supposed to show error message with error.message
        })

    }, [searchOccured]); // Sebbe: När jag tryckt på sök knappen, kör denna. Hur gör vi? Props kanske

    return(
        <>
            <Search setSearchOccured={setSearchOccured} setSearchInputValue={setSearchInputValue} />
            <DisplayResults data={food} />
        </>
    )
}

export default FetchAPI;