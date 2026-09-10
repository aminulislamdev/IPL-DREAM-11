import type { Dispatch, SetStateAction } from "react";
import type { IPlayer } from "../../types/player";
import SelectedPlayerCard from "./SelectedPlayerCard";

interface ISelectedPlayerType {
  selectedPlayer: IPlayer[];
  setSelectedPlayer: Dispatch<SetStateAction<IPlayer[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const Selected = ({
  selectedPlayer,
  setSelectedPlayer,
  coin,
  setCoin,
}: ISelectedPlayerType) => {
  return (
    <div className="w-full">
      <SelectedPlayerCard
        selectedPlayer={selectedPlayer}
        setSelectedPlayer={setSelectedPlayer}
        coin={coin}
        setCoin={setCoin}
      />
    </div>
  );
};

export default Selected;