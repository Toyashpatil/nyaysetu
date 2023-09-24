import React from 'react'
import Admin from '../../components/AdminLayout'
import  RectangleImg  from "../assets/rectangleimg.jpg";
import NearbyLawyerCard from '../../components/NearbyLawyerCard'
import LCard from '../../components/LCard'
import AdminCard from '../../components/AdminCard'
import { useContext } from "react";
import AC from '../../components/AC'
const AdminHome = () => {
  
  return (
    <div className='flex flex-col max-h-screen'>
        {/* Admin wrapper contains sidebar by default */}
        {/* Only add in children */}
      <Admin> 
        <div className='mt-4 mx-[5%] flex gap-10 '>
          {/* <LCard
        imageUrl={RectangleImg}
        name={lawyer.name}
        employeeNumber={lawyer.veriNum}
        dob={lawyer.DOB}
        phoneNumber={lawyer.phone}
        numberOfCases={222}
        address="123 Main St"
        email={lawyer.email}
        courts={lawyer.courts}
        filedCases={lawyer.filedCase}
        pendingCases={lawyer.pendingCase}
        objectionCases={10}
        disposedCases={60}
        areaOfPractice="Criminal Defense, Family Law"
        
        ></LCard> */}
        <LCard
        imageUrl={RectangleImg}
        name="Toyash Patil"
        employeeNumber="12345678911"
        dob="20-04-2022"
        phoneNumber="382474782"
        numberOfCases={143}
        address="123 Main St"
        email="toyash@example.com"
        courts="Supreme Court, District Court"
        filedCases={90}
        pendingCases={50}
        objectionCases={10}
        disposedCases={60}
        areaOfPractice="Criminal Defense, Family Law"
        >

        </LCard>
        <div className=''>
          <p className='font-bold'>Your Clients</p>
          <br></br>
          <div className="mb-6">
          <AdminCard name="Atharva Upare" cnr="MHT123456788"/>
          </div>
          <div className="mb-6">
          <AdminCard name="Atharva Upare" cnr="MHT123456788"/>
          </div>
          <div className="mb-6">
          <AdminCard name="Atharva Upare" cnr="MHT123456788"/>
          </div>
          
        </div>

        <div className=''>
          <p className='font-bold'> Notifications and Requests:</p>
          <br></br>
          <div className="mb-6">
          <AC name="Atharva Upare" cnr="MHT123456788"/>
          </div>
          <div className="mb-6">
          <AC name="Atharva Upare" cnr="MHT123456788"/>
          </div>
          <div className="mb-6">
          <AC name="Atharva Upare" cnr="MHT123456788"/>
          </div>
          
        </div>
        </div>
        
       
      </Admin>
      
    </div>
    
  )
}

export default AdminHome