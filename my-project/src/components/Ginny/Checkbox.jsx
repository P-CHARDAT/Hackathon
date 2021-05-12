import React, { useState } from "react";

export default function Box() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <input onClick={() => setCount(count + 1)} id="checkbox" type="checkbox" />{count}
      <label for="checkbox"></label>
    </div>
  );
}
