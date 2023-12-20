import React, { useState } from 'react'
import AuthContext from './authContext'

const AuthState = (props) => {

  const [uniqueId, setUniqueId] = useState("");
  const [temlaw, setTemlaw] = useState("1234 000 2343 3321")
  const [temppri, setTemppri] = useState("MHT123456788")
  const [lawyer, setLawyer] = useState({});
  const [prisoner, setPrisoner] = useState({});

  const getLawyer = async (finalnew) => {
    const response = await fetch("http://localhost:5000/api/auth/fetchLawyer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ veriNum: finalnew })
    });
    const Data = await response.json();
    setLawyer(Data)
  }

  const getPrisoner = async (finalnew) => {
    const response = await fetch("http://localhost:5000/api/auth/fetchPrisoner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ veriNum: finalnew })
    });
    const Data = await response.json();
    setPrisoner(Data)
  }


  return (
    <AuthContext.Provider value={{
      uniqueId, setUniqueId, lawyer, setLawyer,
      prisoner, setPrisoner, getLawyer, getPrisoner, temlaw, setTemlaw,
      temppri, setTemppri
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState