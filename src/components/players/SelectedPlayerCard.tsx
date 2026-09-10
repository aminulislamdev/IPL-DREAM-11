import { RiDeleteBinLine } from "react-icons/ri";
import type { IPlayer } from "../../types/player";
import type { Dispatch, SetStateAction } from "react";

interface ISelectedPlayerCard {
  selectedPlayer: IPlayer[];
  setSelectedPlayer: Dispatch<SetStateAction<IPlayer[]>>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const SelectedPlayerCard = ({
  selectedPlayer,
  setSelectedPlayer,
  coin,
  setCoin,
}: ISelectedPlayerCard) => {
  const handleRemovePlayer = (index: number) => {
    const player = selectedPlayer[index];
    const newCoinPrice = coin + player.price;

    setCoin(newCoinPrice);

    setSelectedPlayer((prevPlayers) =>
      prevPlayers.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="container mx-auto my-6 w-full rounded-2xl border border-gray-200 bg-white p-3 shadow-sm sm:my-8 sm:p-4 md:my-10 md:p-5">
      <div className="space-y-3">
        {selectedPlayer.map((player, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50 p-2.5 transition-all duration-200 hover:border-gray-300 hover:bg-white hover:shadow-sm sm:p-3"
          >
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <img
                src={player.playerImg}
                className="h-12 w-12 shrink-0 rounded-xl object-cover sm:h-14 sm:w-14"
              />
              <div className="min-w-0">
                <h3 className="truncate text-sm font-bold text-gray-900 sm:text-base">
                  {player.playerName}
                </h3>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                  {player.playerType}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleRemovePlayer(index)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-all duration-200 hover:bg-red-50 hover:text-red-500 active:scale-95 sm:h-10 sm:w-10"
              title="Remove player"
            >
              <RiDeleteBinLine size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedPlayerCard;