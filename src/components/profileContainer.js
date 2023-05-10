const ProfileContainer = () => {
  return (
    <div className="shrink-0 self-stretch">
      <label htmlFor="profile-name">Your Profile</label>
      <div className="mb-4 mt-3 box-border flex h-[3.06rem] w-full shrink-0 items-center gap-[0.81rem] rounded-[10px] bg-neutral-100 px-[0.94rem] py-[0.81rem]">
        <img
          className="relative h-[1.44rem] w-[1.44rem] shrink-0"
          alt="user icon"
          src="/images/user.svg"
        />
        <input
          id="profile-name"
          className="w-full bg-neutral-100 outline-none"
          placeholder="Name"
          required
        />
      </div>
      <div className="box-border flex h-[3.06rem] w-full shrink-0 items-center gap-[0.81rem] rounded-[10px] bg-neutral-100 px-[0.94rem] py-[0.81rem]">
        <img
          className="relative h-[1.75rem] w-[1.75rem] shrink-0"
          alt="phone icon"
          src="/images/phone.svg"
        />
        <input
          className="w-full bg-neutral-100 outline-none"
          type="number"
          // pattern="/^(\+\d{1,3}[- ]?)?\d{10}$/"
          // title="Enter valid mobile number"
          placeholder="Number"
          required
        />
      </div>
    </div>
  );
};

export default ProfileContainer;
