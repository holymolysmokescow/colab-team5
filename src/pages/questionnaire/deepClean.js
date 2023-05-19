import MultipleSelect from "@/components/MultipleSelect";
import NextArrowButton from "@/components/nextArrowButton";
import PreviousArrowButton from "@/components/previousArrowButton";
import ProgressBar from "@/components/progressBar";
import { useRouter } from "next/router";
import React, { useState } from "react";

const DeepClean = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const router = useRouter();
  const handleSelectChange = (selectedValues) => {
    setSelectedOptions(selectedValues);
  };
  const handleNextClick = () => {
    router.push("/questionnaire/petPeeves");
  };
  const handlePreviousClick = () => {
    router.push("/questionnaire/cleanlinessStandard");
  };
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
  ];
  return (
    <div className="relative flex min-h-screen min-w-[100vw] flex-col justify-end gap-6 bg-white p-7 text-left">
      <ProgressBar page={2} />
      <div className="ml-2">
        <h2 className=" text-xl font-semibold">
          To me, “deep clean” means....
        </h2>
        <h3 className="text-base text-stone-500">
          Please select all that may apply
        </h3>
      </div>
      <div className="mt-5">
        <MultipleSelect
          options={options}
          selectedOptions={selectedOptions}
          onChange={handleSelectChange}
        />
      </div>
      <div className="mb-12 flex justify-between">
        <div onClick={handlePreviousClick}>
          <PreviousArrowButton />
        </div>
        <div onClick={handleNextClick}>
          <NextArrowButton />
        </div>
      </div>
    </div>
  );
};

export default DeepClean;
