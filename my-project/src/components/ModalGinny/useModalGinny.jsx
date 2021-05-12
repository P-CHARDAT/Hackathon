import { useState } from 'react';

const useModalGinny = () => {
  const [isShowingGinny, setIsShowingGinny] = useState(false);

  function toggleGinny() {
    setIsShowingGinny(!isShowingGinny);
  }

  return [isShowingGinny, toggleGinny];
};

export default useModalGinny;