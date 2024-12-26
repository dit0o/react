import { createContext } from "react";
export const AppContext=createContext()
const ContextProvider=(props)=>{
    const phone="9389601653"
    const name="Gagan"
return(
    <AppContext.Provider value={{phone,name}}>
         {props.children}
    </AppContext.Provider>
)
}
export default ContextProvider