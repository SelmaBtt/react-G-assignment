import { useContext, useEffect, useState } from "react"
import { OnClickContext } from "../context/OnClickContextProvider";
import Search from "./Search";
import DisplayResults from "./DisplayResult";
import styled from '../stylesheets/FetchApi.module.css'

const FetchAPI=()=> {
    const { onClickUpdateFunc } = useContext(OnClickContext)
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
            // setSearchOccured(false) // Resets the button so it isnt always on (i.e always on true)
            onClickUpdateFunc(false)
        })
        .catch(error => {
            console.log(error.message); //Supposed to show error message with error.message
        })

    }, [onClickUpdateFunc]); // Sebbe: När jag tryckt på sök knappen, kör denna. Hur gör vi? Props kanske

    return(
        <>
            <Search setSearchInputValue={setSearchInputValue} />
            <DisplayResults data={meals} />
        </>
    )
}

export default FetchAPI;