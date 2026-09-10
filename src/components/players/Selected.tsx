import type { Dispatch, SetStateAction } from "react";
import type { IPlayer } from "../../types/player";

interface ISelectedPlayerType {
  selectedPlayer: IPlayer[];
  setSelectedPlayer: Dispatch<SetStateAction<IPlayer[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const Selected = ({
  selectedPlayer,
}: ISelectedPlayerType) => {
  return (
    <div className="w-full">
      <p>{selectedPlayer.length} players selected</p>
    </div>
  );
};

export default Selected;