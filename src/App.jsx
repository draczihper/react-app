import { useState } from "react";
function Component () {
  const [count, setCount] = useState(0)

  setCount(count + 1)

  return <h1>{count}</h1>
}

export default Component;