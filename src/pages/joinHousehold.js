import ProfileContainer from "../components/profileContainer";

const JoinHousehold = () => {
  return (
    <div className="relative flex min-h-screen min-w-[100vw] flex-col justify-end gap-7 bg-white p-7 text-left">
      <h1 className="flex flex-col items-start text-3xl font-semibold">
        Join Household
      </h1>
      <div className="shrink-0 self-stretch">
        <div className="-mt-5 mb-1">Invite Link</div>
        <div className="box-border flex h-[3.06rem] w-full shrink-0 items-center gap-[0.81rem] rounded-[10px] border border-black px-[0.94rem] py-[0.81rem]">
          <img
            className="relative h-[1.44rem] w-[1.44rem] shrink-0"
            alt="link icon"
            src="/images/link.svg"
          />
          <input className="w-full" placeholder="Paste Link" />
        </div>
      </div>
      <div className="-mb-4 mt-4 h-0.5 bg-neutral-300" />
      <form>
        <ProfileContainer />
        <button className="mb-12 mt-14 flex h-14 w-full flex-col items-center justify-center self-stretch rounded-[30px] bg-primary-blue text-white">
          Join Household
        </button>
      </form>
    </div>
  );
};

export default JoinHousehold;
