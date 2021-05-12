import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [count, setCount] = useState(0);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return [isShowing, toggle];
};

export default useModal;
