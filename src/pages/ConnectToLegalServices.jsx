import React from "react";
import Header from "../components/Header";
import RectangleImg from "../pages/assets/rectangleimg.jpg";
import UserCard from "../components/LawyerCard";
import NearbyLawyerCard from "../components/NearbyLawyerCard";

const ConnectToLegalServices = () => {
  return (
    <div className="flex flex-col">
      <Header name="Ojas Chatur" />
      <div className="text-center mx-2 text-2xl text-lightseagreen font-semibold capitalize max-w-full h-12 py-2">
        <div className="py-4">Your Lawyers</div>
        <div className="flex flex-col gap-4">
          <UserCard
            imageUrl={RectangleImg}
            name="Atharva Upare"
            employeeNumber="0000 0000 0000 0000"
          />
          <UserCard
            imageUrl={RectangleImg}
            name="Toysh Patil"
            employeeNumber="1230 1243 3243 3256"
          />
        </div>
        <div className="text-center text-2xl text-lightseagreen font-semibold capitalize max-w-full max-h-screen py-2">
          <div className="py-4">Nearby Lawyers</div>
          <div className="flex flex-row gap-2 flex-wrap items-center justify-center">
            <NearbyLawyerCard
              imageUrl={RectangleImg}
              name="Toyash Patil"
              employeeNumber="6969 0000 0000 0000"
              dob="20-04-1988"
              phoneNumber="382474782"
              numberOfCases={222}
              address="123 Main St"
              email="toyash@example.com"
              courts="Supreme Court, District Court"
              filedCases={100}
              pendingCases={50}
              objectionCases={10}
              disposedCases={60}
              areaOfPractice="Criminal Defense, Family Law"
            />
            <NearbyLawyerCard
              imageUrl={RectangleImg}
              name="Toyash Patil"
              employeeNumber="6969 6969 6969 6969"
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectToLegalServices;
