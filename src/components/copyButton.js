import React from "react";

const CopyButton = ({ inviteLink }) => {
  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
    } catch (error) {
      console.error("Copy failed", error);
      fallbackCopyText(inviteLink);
    }
  };

  const fallbackCopyText = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = 0;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      console.log("Copied using fallback method");
    } catch (error) {
      console.error("Fallback copy failed", error);
    }

    document.body.removeChild(textArea);
  };

  return (
    <button
      onClick={copyText}
      className="flex h-[3.06rem] w-[9rem] cursor-pointer items-center justify-center gap-2 rounded-[1.25rem] border-[0.5px] border-solid border-primary-blue bg-white text-primary-blue"
    >
      <img className="h-[1.38rem] w-[1.19rem]" alt="copy button" src="images/copy.svg" />
      Copy
    </button>
  );
};

export default CopyButton;
