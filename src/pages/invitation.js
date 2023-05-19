import CopyButton from "@/components/copyButton";
import NextArrowButton from "@/components/nextArrowButton";
import ShareButton from "@/components/shareButton";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Invitation = () => {
  const [inviteLink, setInviteLink] = useState("");
  const router = useRouter();
  const handleClick = () => {
    router.push("/questionnaire");
  };
  const handleChange = (e) => {
    setInviteLink(e.target.value);
  };
  return (
    <div className="relative flex min-h-screen min-w-[100vw] flex-col items-center overflow-hidden bg-primary-purple">
      <div className="mt-9 h-24 w-[92%] rounded-2xl bg-neutral-500"></div>
      <div className="absolute top-14 flex h-full w-full flex-col justify-end gap-7 rounded-t-2xl bg-white p-7">
        <h1 className="mb-7 text-3xl font-semibold">Invite Roommates</h1>
        <div className="shrink-0 self-stretch">
          <div className=" mb-4 text-primary-blue">
            Anyone who has this link will be able to join your CleanMate
            household
          </div>
          <div className="box-border flex h-[3.06rem] w-full shrink-0 items-center gap-[0.81rem] rounded-[10px] border border-black px-[0.94rem] py-[0.81rem]">
            <img
              className="relative h-[1.44rem] w-[1.44rem] shrink-0"
              alt="link icon"
              src="/images/link.svg"
            />
            <input
              className="w-full outline-none"
              placeholder="Invite Link"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="flex gap-12">
          <CopyButton inviteLink={inviteLink} />
          <ShareButton
            shareUrl={inviteLink}
            title={"CleanMate Invitation Link"}
          />
        </div>
        <div
          className="mb-[6.5rem] mt-20 flex justify-end"
          onClick={handleClick}
        >
          <NextArrowButton />
        </div>
      </div>
    </div>
  );
};

export default Invitation;
