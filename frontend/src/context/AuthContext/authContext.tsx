import React,{useContext} from "react";

export const AuthContext = React.createContext({
  isLogined : false,
  login : ()=>{},
  logout : ()=>{}
})
