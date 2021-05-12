import { useState } from "react";

const useModalHeader = () => {
  const [isShowingHeader, setIsShowingHeader] = useState(false);

  function toggleHeader() {
    setIsShowingHeader(!isShowingHeader);
  }

  return [isShowingHeader, toggleHeader];
};

export default useModalHeader;
