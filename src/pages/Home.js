import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bg from "./assets/Login2.png"
import AuthContext from '../context/authContext'
const Home = () => {

  const {uniqueId,setUniqueId,getLawyer,getPrisoner,temlaw,temppri}=useContext(AuthContext);

  const [auth, setAuth] = useState({
    name: "",
    veriNum: "",
    lawyer: false,
    prisoner: false

  })
  const navigate=useNavigate();

  const handleChange=(e)=>{
      const {name,value,checked}=e.target
      if(name==="lawyer"||name==="prisoner"){
          setAuth((prev)=>{
            return({
              ...prev,
              [name]:checked
            }
            )
          })
      }else{
        setAuth((prev)=>{
          return(
            {
              ...prev,
              [name]:value
            }
          )
        })
      }
  }

  const handleId=(e)=>{
    e.preventDefault()
    console.log("i clicked")
    setUniqueId(auth.veriNum);
  }

  const handleClick = async (e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name:auth.name,veriNum:auth.veriNum,lawyer:auth.lawyer,prisoner:auth.prisoner})
    });
    const Data=await response.json();
    console.log(Data)
    if(Data.success){
      localStorage.setItem("token",Data.token)
      if(Data.user==="prisoner"){
        getPrisoner(uniqueId);
        getLawyer(temlaw)
        navigate('/')
      }else{
        getLawyer(uniqueId);
        getPrisoner(temppri)
        navigate("/admin")
      }
      
    }else{
      alert("No such Reacord Found")
    }
  }

  return (
    <div className='main h-[100vh] bg-[#FFFAFA]'>
      <div className='lady h-[45vh] overflow-hidden z-[2] '>
        <img src={bg} className='img h-[100%] w-[100%] '></img>
      </div>
      <div className='login bg-[#FFFAFA] h-[50vh] flex items-center flex-col'>
        <p className='text-[1.5rem] not-italic font-semibold leading-[normal]'>Welcome</p>
        <form className='inputs  h-auto w-[80%] mt-4 inline-flex flex-col  items-start gap-6'>
          <div className='input1 w-full flex flex-col items-start gap-1.5'>
            <p className='text-[1rem] not-italic font-medium leading-[normal]' >Username:</p>
            <input placeholder='username' className='username lex w-[100%] items-center border shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] px-[0.3125rem] py-2 rounded-[0.3.25rem] border-solid border-[#41C0AB] bg-[#efefef]'onChange={handleChange} name="name"></input>
          </div>
          <div className=' input2 w-full flex flex-col justify-center items-start gap-[0.3rem]'>
            <p className='text-[1rem] not-italic font-medium leading-[normal]'>Designation:</p>
            <div className='flex items-center gap-12'>
              <div className='forLawyer flex items-center gap-[0.56rem]'>
                <p className='text-[1rem] not-italic font-medium leading-[normal]'>Lawyer</p>
                <input className="lawyer border rounded-sm border-solid border-[#41C0AB]" type='checkbox' onChange={handleChange} name='lawyer' ></input>
              </div>
              <div className=' forUtp flex items-center gap-[0.9rem]'>
                <p className='text-[1rem] not-italic font-medium leading-[normal]' onChange={handleChange} name='prisoner' >Undertrial Prisoner</p>
                <input type='checkbox'className='utp border rounded-sm border-solid border-[#41C0AB]' ></input>
              </div> 
            </div>
          </div>
          <div className='input3 w-full flex flex-col items-start gap-1.5'>
          <p className='text-[1rem] not-italic font-medium leading-[normal]'>Enter CNR/Enrollment Number:</p>
          <input className="number flex w-[100%] items-center px-[0.3125rem] py-2 border shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] rounded-[0.325rem] border-solid border-[#41C0AB] bg-[#efefef]" placeholder='CNR/Enrollment Number' onChange={handleChange} name='veriNum' ></input>
          <button onClick={handleId}>Confirm</button>
          </div>
          <button type="submit" className='flex w-[100%] justify-center items-center px-[0.3125rem] py-2  border shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] rounded-[0.3125rem] border-solid border-[#41C0AB] bg-[#41C0AB] ' onClick={handleClick}>Continue</button>

        </form>
        
      </div>
    </div>
  )
}

export default Home