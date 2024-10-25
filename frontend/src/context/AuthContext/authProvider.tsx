import { useState } from "react";
import { AuthContext } from "./authContext";

const AuthProvider : React.FC<{children : React.ReactNode}> = ({ children }) => {
  const [isLogined, setIsLogined] = useState(false)

  const login = () => {setIsLogined(true)}
  const logout = () => {setIsLogined(false)}
  return(
    <AuthContext.Provider value={{isLogined, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider