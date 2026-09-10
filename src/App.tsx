import Navber from "./components/Navber"
import { useState } from "react";

function App() {
  const [coin, setCoin] = useState(15000);

  return (
    <div>
      <Navber coin={coin} />
    </div>
  )
}

export default App