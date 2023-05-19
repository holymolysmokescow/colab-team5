import React, { useEffect, useState } from 'react';

const ProgressBar = ({ page }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth((page / 3) * 100);
  }, [page]);

  return (
    <div className="flex w-full gap-3 justify-center items-center">
      <div className="w-[80%] h-2 bg-neutral-200 rounded-[1.25rem]">
        <div style={{ width: `${width}%` }} className={` bg-black h-2 rounded-[1.25rem]`} />
      </div>
      <h5>{page} of 3</h5>
    </div>
  );
};

export default ProgressBar;
