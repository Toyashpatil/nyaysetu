import React from "react";
import Admin from "../../components/AdminLayout";
import PrisonerCard from "../../components/PrisonerCard";
import img from "../assets/lawyer 1.png";

const UnderTrialPrisonerInCourt = () => {
  const prisoners = [
    {
      imageUrl: img,
      name: "John Doe",
      locationOfTrial: "District Court",
      dateOfCustody: "2023-01-15",
      caseStatus: "Pending",
      daysInJail: 120,
      underSection: "Section 123",
      underAct: "Act XYZ",
    },
    {
      imageUrl: img,
      name: "John Doe",
      locationOfTrial: "District Court",
      dateOfCustody: "2023-01-15",
      caseStatus: "Pending",
      daysInJail: 120,
      underSection: "Section 123",
      underAct: "Act XYZ",
    },
    {
      imageUrl: img,
      name: "John Doe",
      locationOfTrial: "District Court",
      dateOfCustody: "2023-01-15",
      caseStatus: "Pending",
      daysInJail: 120,
      underSection: "Section 123",
      underAct: "Act XYZ",
    },
    {
      imageUrl: img,
      name: "John Doe",
      locationOfTrial: "District Court",
      dateOfCustody: "2023-01-15",
      caseStatus: "Pending",
      daysInJail: 120,
      underSection: "Section 123",
      underAct: "Act XYZ",
    },
    {
      imageUrl: img,
      name: "John Doe",
      locationOfTrial: "District Court",
      dateOfCustody: "2023-01-15",
      caseStatus: "Pending",
      daysInJail: 120,
      underSection: "Section 123",
      underAct: "Act XYZ",
    },
    {
      imageUrl: img,
      name: "John Doe",
      locationOfTrial: "District Court",
      dateOfCustody: "2023-01-15",
      caseStatus: "Pending",
      daysInJail: 120,
      underSection: "Section 123",
      underAct: "Act XYZ",
    },

    // Add more prisoner data as needed
  ];

  return (
    <div className="flex flex-col">
      {/* Admin wrapper contains sidebar by default */}
      {/* Only add in children */}

      <Admin className={"mx-24  p-8 "}>
        <div className="flex flex-row gap-14 flex-wrap items-center justify-center">
          {prisoners.map((prisoner, index) => (
            <PrisonerCard key={index} {...prisoner} />
          ))}
        </div>
        <div></div>
      </Admin>
    </div>
  );
};

export default UnderTrialPrisonerInCourt;
