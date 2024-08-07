import React from "react";
import Paragraph from "./Paragraph";
import "../../base.css";

const IntroBlock: React.FC = () => {
  return (
    <div className="p-6 sm:p-10 md:py-14 lg:py-16 lg+:py-18 xl:flex xl:justify-center">
      <div className="xl:w-[1173px] 2xl:w-[1400px]">
        <Paragraph>
          The birth of a baby is an exciting and happy time for parents. For a
          healthy start, babies should receive the following newborn medications
          on the first day of life: vitamin K injection, hepatitis B
          immunization and erythromycin eye ointment. Each of these are
          recommended by the American Academy of Pediatrics as they are
          important for the health and wellbeing of newborns. Each will be
          briefly discussed below with helpful links to additional resources
          provided.
        </Paragraph>
      </div>
    </div>
  );
};

export default IntroBlock;
