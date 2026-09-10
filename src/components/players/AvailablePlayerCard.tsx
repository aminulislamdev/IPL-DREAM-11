import type { Dispatch, SetStateAction } from "react";
import type { IPlayer } from "../../types/player";
import { FaUserLarge, FaFlag } from "react-icons/fa6";
import { toast } from "react-toastify";

interface Player {
  player: IPlayer;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayer: IPlayer[];
  setSelectedPlayer: Dispatch<SetStateAction<IPlayer[]>>;
}

const AvailablePlayerCard = ({
  player,
  coin,
  setCoin,
  selectedPlayer,
  setSelectedPlayer,
}: Player) => {
  const isSelected = selectedPlayer.some(
    (selected) =>
      selected.playerName === player.playerName &&
      selected.playerImg === player.playerImg
  );

  const handleSelectedPlayer = () => {
    if (isSelected) {
      return;
    }

    const newCoinPrice = coin - player.price;

    if (newCoinPrice < 0) {
      toast.error("Coin is not enough to purchase");
      return;
    }

    setCoin(newCoinPrice);

    setSelectedPlayer((prevPlayers) => [
      ...prevPlayers,
      player,
    ]);

    toast.success(
      `${player.playerName} is purchased successfully`
    );
  };

  return (
    <div className="group w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Player Image */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52"
        />
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-800 shadow backdrop-blur-sm">
          {player.playerType}
        </span>
      </div>

      {/* Player Name */}
      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100">
          <FaUserLarge className="text-gray-600" size={15} />
        </div>
        <h2 className="truncate text-lg font-bold text-gray-900 sm:text-xl">
          {player.playerName}
        </h2>
      </div>

      {/* Country */}
      <div className="mt-4 flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2 text-gray-500">
          <FaFlag className="shrink-0 text-gray-500" size={15} />
          <span className="truncate text-sm font-medium">{player.origin}</span>
        </div>
        <span className="shrink-0 rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700">
          {player.playerType}
        </span>
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-gray-200" />

      {/* Rating */}
      <h3 className="text-sm font-bold text-gray-900">Rating</h3>

      {/* Batting & Bowling */}
      <div className="mt-3 flex items-center justify-between gap-3">
        <span className="truncate text-sm font-semibold text-gray-800">
          {player.buttingStyle}
        </span>
        <span className="truncate text-right text-sm text-gray-500">
          {player.bowlingStyle}
        </span>
      </div>

      {/* Price & Button */}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-base font-bold text-gray-900">
          Price: ${player.price}
        </p>

        <button
          onClick={handleSelectedPlayer}
          disabled={isSelected}
          className="
            w-full rounded-lg
            border-2 border-gray-300
            bg-white px-4 py-2
            text-sm font-semibold text-gray-700
            transition-all duration-200
            hover:-translate-y-0.5
            hover:border-black
            hover:bg-black
            hover:text-white
            hover:shadow-lg
            active:scale-95
            disabled:cursor-not-allowed
            disabled:translate-y-0
            disabled:border-green-500
            disabled:bg-green-100
            disabled:text-green-700
            disabled:shadow-none
            sm:w-auto
            sm:px-5
          "
        >
          {isSelected ? "Selected" : "Choose Player"}
        </button>
      </div>

    </div>
  );
};

export default AvailablePlayerCard;