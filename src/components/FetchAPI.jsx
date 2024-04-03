import { useEffect, useState } from "react"
import Search from "./Search";
import DisplayResults from "./DisplayResult";

const FetchAPI=()=> {
    const [meals, setMeals] = useState([])
    const [searchInputValue, setSearchInputValue] = useState(null) // Becomes a prop for the API search, is the input value

    useEffect(()=> {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchInputValue)
        .then(response => {
            if(!response.ok){
                throw Error('The meal youre searching for doesnt exist') //This error is for non existent input search item
            }
            return response.json();
        })
        .then(data => {
            setMeals(data.meals)
        })
        .catch(error => {
            console.log(error.message); //Supposed to show error message with error.message
        })

    }, [searchInputValue]); 

    return(
        <>
            <Search setSearchInputValue={setSearchInputValue} />
            {(searchInputValue && searchInputValue.length> 0) && <DisplayResults data={meals} />}
            
        </>
    )
}

export default FetchAPI;