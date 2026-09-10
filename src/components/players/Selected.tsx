import type { Dispatch, SetStateAction } from "react";
import type { IPlayer } from "../../types/player";
import SelectedPlayerCard from "./SelectedPlayerCard";

interface ISelectedPlayerType {
  selectedPlayer: IPlayer[];
  setSelectedPlayer: Dispatch<SetStateAction<IPlayer[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const Selected = ({ selectedPlayer }: ISelectedPlayerType) => {
  return (
    <div className="w-full">
      <SelectedPlayerCard selectedPlayer={selectedPlayer} />
    </div>
  );
};

export default Selected;