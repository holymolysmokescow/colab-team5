import { useRouter } from "next/router";
import ProfileContainer from "../components/profileContainer";

const CreateHousehold = () => {
  const router = useRouter();
  const handleClick = () => {
    // router.push("/inviteRoommates");
  };
  return (
    <div className="relative flex min-h-screen min-w-[100vw] flex-col justify-end gap-7 bg-white p-7 text-left">
      <h1 className="flex flex-col items-start text-3xl font-semibold">
        Create New Household
      </h1>
      <form>
        <div className="mb-9">
          <label htmlFor="household">Household</label>
          <div className="mt-3 box-border flex h-[3.06rem] w-full shrink-0 items-center gap-[0.81rem] rounded-[10px] bg-neutral-100 px-[0.94rem] py-[0.81rem]">
            <img
              className="relative h-[1.44rem] w-[1.44rem] shrink-0"
              alt="home icon"
              src="/images/home.svg"
            />
            <input
              className=" w-full bg-neutral-100 outline-none"
              id="household"
              type="text"
              placeholder="Household Name"
              required
            />
          </div>
        </div>
        <ProfileContainer />
        <button
          onClick={handleClick}
          type="submit"
          className="transition duration-300 ease-in-out active:bg-indigo-700 mb-12 mt-14 flex h-14 w-full flex-col items-center justify-center self-stretch rounded-[30px] bg-primary-blue text-white"
        >
          Create Household
        </button>
      </form>
    </div>
  );
};

export default CreateHousehold;
