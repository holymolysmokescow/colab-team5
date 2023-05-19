import { useRouter } from "next/router";
import React from "react";

const Questionnaire = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/questionnaire/cleanlinessStandard");
  };
  return (
    <div className="relative flex min-h-screen min-w-[100vw] flex-col items-center justify-end gap-7 bg-primary-purple p-7">
      <h1 className="text-[1.625rem] font-semibold leading-9">
        Cleanliness Questionnaire
      </h1>
      <h2 className="ml-3 text-[1.625rem]">
        Next, answer a few quick questions about cleanliness to share with your
        roommates
      </h2>
      <button
        onClick={handleClick}
        type="submit"
        className="mb-12 mt-52 flex h-14 w-full flex-col items-center justify-center self-stretch rounded-[30px] bg-primary-blue font-semibold text-white transition duration-300 ease-in-out active:bg-indigo-700"
      >
        Start Cleanliness Questionnaire
      </button>
    </div>
  );
};

export default Questionnaire;
