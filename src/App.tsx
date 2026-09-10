import Navber from "./components/Navber"
import Banner from "./components/Banner"
import Players from "./components/players/Players"
import { Suspense, useState } from "react";
import type { IPlayer } from "./types/player";
import FooterSection from "./components/Footer";

async function playersFetch(): Promise<IPlayer[]> {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}

function App() {
  const [playersDataPromise] = useState(() => playersFetch())
  const [coin, setCoin] = useState(15000);

  return (
    <div>
      <Navber coin={coin} />
      <Banner></Banner>
      <Suspense fallback={<p>Loading........................</p>}>
        <Players playerDataPromise={playersDataPromise} coin={coin} setCoin={setCoin}></Players>
      </Suspense>
      <FooterSection></FooterSection>
    </div>
  )
}

export default App