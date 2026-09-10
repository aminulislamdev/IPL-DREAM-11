import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { IPlayer } from "../../types/player";
import Available from "./Available";

interface IPlayerProps {
  playerDataPromise: Promise<IPlayer[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const Players = ({
  playerDataPromise,
  coin,
  setCoin,
}: IPlayerProps) => {
  const players = use(playerDataPromise);

  const [type, setType] = useState<"Available" | "Selected">("Available");
  const [selectedPlayer, setSelectedPlayer] = useState<IPlayer[]>([]);

  const handleButtonType = (type: "Available" | "Selected") => {
    setType(type);
  };

  return (
    <div className="container mx-auto mt-6 mb-50 px-4">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold sm:text-[28px]">
          {type === "Available" ? "Available Players" : "Selected Players"}
        </h2>

        <div className="flex self-start sm:self-auto">
          <button
            onClick={() => handleButtonType("Available")}
            className={`btn rounded-l-md rounded-r-none border-r-0 font-bold ${type === "Available" ? "btn-warning" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => handleButtonType("Selected")}
            className={`btn rounded-l-none rounded-r-md border-l-0 font-bold ${type === "Selected" ? "btn-warning" : ""}`}
          >
            Selected
          </button>
        </div>
      </div>

      {type === "Available" && (
        <Available
          players={players}
          coin={coin}
          setCoin={setCoin}
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
        />
      )}

    </div>
  );
};

export default Players;