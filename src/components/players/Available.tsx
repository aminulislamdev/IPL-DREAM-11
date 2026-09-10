import type { Dispatch, SetStateAction } from "react";
import type { IPlayer } from "../../types/player";

interface IPlayerType {
  players: IPlayer[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayer: IPlayer[];
  setSelectedPlayer: Dispatch<SetStateAction<IPlayer[]>>;
}

const Available = ({
  players,
}: IPlayerType) => {
  return (
    <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {players.map((player: IPlayer, index: number) => (
        <div key={index} className="border p-4 rounded-lg">
          {player.playerName}
        </div>
      ))}
    </div>
  );
};

export default Available;