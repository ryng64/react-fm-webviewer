import { useEffect, useState } from "react";

function getFoundCount() {
  const [foundCount, setfoundCount] = useState(0);

  return (
    <>
      <input type="text" value={foundCount} id="fc" />
      <button
        onClick={() => {
          setfoundCount(foundCount * 2);
        }}
      >
        effect
      </button>
    </>
  );
}
