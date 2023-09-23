import React from "react";
import Header from "../components/Header";
import RectangleImg from "../pages/assets/rectangleimg.jpg";
import Button from "../components/Button";
import UserCard from "../components/LawyerCard";

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
          <div className="nearbylawyer h-max w-max border border-lightseagreen inset rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] overflow-hidden px-2 relative">
            <div className="flex items-center justify-center">
                <img
                  src={RectangleImg}
                  className="h-28 w-28 p-2 rounded-full"
                ></img>
              </div>
              <div className="text-base font-semibold text-center">
                <div>Atharva Upare</div>
                <div className="text-dimgray text-base">00000000000000</div>
              </div>
              <div className="flex flex-col gap-y-2 p-2 items-start">
                <div className="text-base flex flex-row gap-x-2 items-stretch">
                  <div className="text-dimgray">DOB:</div>
                  <div>20-04-1988</div>
                </div>
                <div className="text-base flex flex-row gap-x-2 items-stretch">
                  <div className="text-dimgray">Ph. No.</div>
                  <div>382474782</div>
                </div>
                <div className="text-base flex flex-row gap-x-2 items-stretch">
                  <div className="text-dimgray">No of cases: </div>
                  <div>22442</div>
                </div>
              </div>
              
            </div>
            <div className="nearbylawyer h-max w-max border border-lightseagreen inset rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] overflow-hidden px-2 relative">
            <div className="flex items-center justify-center">
                <img
                  src={RectangleImg}
                  className="h-28 w-28 p-2 rounded-full"
                ></img>
              </div>
              <div className="text-base font-semibold text-center">
                <div>Atharva Upare</div>
                <div className="text-dimgray text-base">00000000000000</div>
              </div>
              <div className="flex flex-col gap-y-2 p-2 items-start">
                <div className="text-base flex flex-row gap-x-2">
                  <div className="text-dimgray">DOB:</div>
                  <div>20-04-1988</div>
                </div>
                <div className="text-base flex flex-row gap-x-2">
                  <div className="text-dimgray">Ph. No.</div>
                  <div>382474782</div>
                </div>
                <div className="text-base flex flex-row gap-x-2">
                  <div className="text-dimgray">No of cases: </div>
                  <div>22</div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectToLegalServices;
