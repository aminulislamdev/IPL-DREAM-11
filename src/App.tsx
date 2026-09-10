import Navber from "./components/Navber"
import Banner from "./components/Banner"
import { useState } from "react";

function App() {
  const [coin, setCoin] = useState(15000);

  return (
    <div>
      <Navber coin={coin} />
      <Banner></Banner>
    </div>
  )
}

export default App