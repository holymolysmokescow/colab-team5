import Link from "next/link";

const InviteRoommates = () => {
  return (
    <div className="flex min-h-screen min-w-[100vw] flex-col items-center bg-primary-purple">
      <img
        className="mt-24 h-[16.38%] max-h-full w-[65.07%] max-w-full overflow-hidden"
        alt="invite roommates"
        src="/images/invite_roommates.svg"
      />
      <h1 className="mt-10 pl-5 pr-5 text-[1.625rem] font-normal tracking-[0.35px] ">
        Invite roommates to join your household
      </h1>
      <div className="absolute flex min-h-screen min-w-[100vw] flex-col place-items-center justify-end gap-6 p-7">
        <button className="h-14 w-full rounded-[30px] bg-primary-blue font-semibold text-white">
          Join Household
        </button>
        <Link href={"/"} className="text-primary-blue">
          Skip for now
        </Link>
      </div>
    </div>
  );
};

export default InviteRoommates;
