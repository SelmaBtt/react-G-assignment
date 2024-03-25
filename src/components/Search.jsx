import { useRef, useContext } from "react"
import { OnClickContext } from "../context/OnClickContextProvider";
import gif from '../../assets/chopstick.gif'
import styled from '../stylesheets/Search.module.css'

const Search=({ setSearchInputValue })=> {
    const searchInput = useRef() // "searchInput" value is set to the prop "setSearchInputValue"

    return(
        <>  
            <div className={styled.chopstickGifWrapper}>
                <img className={styled.chopstickGif} src={gif} alt="chopstick gif logo" />
                <h1 className={styled.chopstickTitle}>Delicious recepies</h1>
            </div>
            <div className={styled.divWrapper}>
                <input className={styled.searchInput} ref={searchInput} type="text" placeholder="Search" /> {/* "onChange"=eveytime change happens in the input. "setSeachInputValue" is a useState prop from FetchAPI.jsx, is the value that affects the API */}
                <button className={styled.searchBtn} onClick={() => setSearchInputValue(searchInput.current.value)}>
                    {/* Button piktogram start */}
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width:"41", height: "40", viewBox: "0 0 41 40", fill:"none"}}>
                        <mask id="mask0_13_7" maskUnits="userSpaceOnUse" x="0" y="0" style={{maskType:"alpha", width:"41", height:"41"}}>
                            <rect className={styled.reactSvg} x="0.238159" y="0.00915527" style={{width:"41", height: "41"}}/>
                        </mask>
                        <g mask="url(#mask0_13_7)">
                            <path d="M32.9048 35.0092L22.4048 24.5092C21.5715 25.1758 20.6131 25.7036 19.5298 26.0925C18.4465 26.4814 17.2937 26.6758 16.0715 26.6758C13.0437 26.6758 10.4812 25.6272 8.38396 23.53C6.28674 21.4328 5.23813 18.8703 5.23813 15.8425C5.23813 12.8147 6.28674 10.2522 8.38396 8.15499C10.4812 6.05777 13.0437 5.00916 16.0715 5.00916C19.0992 5.00916 21.6617 6.05777 23.759 8.15499C25.8562 10.2522 26.9048 12.8147 26.9048 15.8425C26.9048 17.0647 26.7104 18.2175 26.3215 19.3008C25.9326 20.3842 25.4048 21.3425 24.7381 22.1758L35.2381 32.6758L32.9048 35.0092ZM16.0715 23.3425C18.1548 23.3425 19.9256 22.6133 21.384 21.155C22.8423 19.6967 23.5715 17.9258 23.5715 15.8425C23.5715 13.7592 22.8423 11.9883 21.384 10.53C19.9256 9.07166 18.1548 8.34249 16.0715 8.34249C13.9881 8.34249 12.2173 9.07166 10.759 10.53C9.30063 11.9883 8.57146 13.7592 8.57146 15.8425C8.57146 17.9258 9.30063 19.6967 10.759 21.155C12.2173 22.6133 13.9881 23.3425 16.0715 23.3425Z" fill="#1C1B1F"/>
                        </g>
                    </svg>
                    {/* Button piktogram end */}
                </button>
            </div>
        </>
    )
}

export default Search;