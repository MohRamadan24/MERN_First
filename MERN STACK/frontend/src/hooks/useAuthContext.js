import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const  useAuthContext = () => {
    const context = useContext(AuthContext)
    
    if (!context) {
        throw Error('use AuthContext must be used inside an WorkoutsContextProvider')
    }

    return context
}