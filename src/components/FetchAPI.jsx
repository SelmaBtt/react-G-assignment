import { useEffect, useState } from "react"
import ShowSearch from "./ShowSearch";

const FetchAPI=()=> {
    const [food, setFood] = useState([])
    const [searchOccured, setSearchOccured] = useState(false)
    const [searchInputValue, setSearchInputValue] = useState(null)

    useEffect(()=> {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchInputValue)
        .then(response => {
            if(!response.ok){
                throw Error('The item youre searching for doesnt exist') //This error is for non existent input search item
            }
            return response.json();
        })
        .then(data => {
            // console.log(data)
            setFood(data.meals)
            setSearchOccured(false)
        })
        .catch(error => {
            console.log(error.message); //Supposed to show error message with error.message
        })

    }, [searchOccured]); // När jag tryckt på sök knappen, kör denna. Hur gör vi? Props kanske

    return(
        <ShowSearch setSearchOccured={setSearchOccured} data={food} setSearchInputValue={setSearchInputValue} />
    )
}

export default FetchAPI;