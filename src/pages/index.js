import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/createHousehold");
  };
  return (
    <main
      className={`relative flex min-h-screen min-w-[100vw] flex-col bg-primary-blue ${inter.className}`}
    >
      <div className="h-96 min-w-[100vw] rounded-b-[10rem] bg-primary-purple">
        <div className="mt-14 flex flex-col items-center">
          <h1 className="text-3xl font-semibold text-primary-blue">
            CleanMate
          </h1>
          <img
            className="mt-8 h-[24.51%] max-h-full w-[68.8%] max-w-full overflow-hidden"
            alt="roommates cleaning icon"
            src="/images/roommates_cleaning.svg"
          />
        </div>
      </div>
      <div className="m-7 mt-6 text-center text-xl font-normal text-white">
        Align with roommates and rotate household chores to keep shared spaces
        clean
      </div>
      <div className="absolute flex min-h-screen min-w-[100vw] flex-col place-items-center justify-end gap-6 p-7">
        <button
          onClick={handleClick}
          className="h-14 w-full rounded-[30px] bg-white font-semibold text-primary-blue"
        >
          Create Household
        </button>
        <Link href={"/joinHousehold"} className="text-white underline">
          Have an invite link? Join here
        </Link>
      </div>
    </main>
  );
}
