// This file is the provider i.e. the functionality
import React, { useState, createContext } from "react";
export const OnClickContext = createContext();

const OnClickContextProvider = (props) => {
    const onClickUpdateFunc = (newValue) => { setBooleanVal(newValue) } // A function that sets the state

    const [booleanVal, setBooleanVal] = useState(false);

    return(
        <OnClickContext.Provider value={{ booleanVal, onClickUpdateFunc }}>
            {props.children}
        </OnClickContext.Provider>
    )
}

export default OnClickContextProvider;