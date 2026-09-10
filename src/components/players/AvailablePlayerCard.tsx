import type { IPlayer } from "../../types/player";
import { FaUserLarge, FaFlag } from "react-icons/fa6";

interface Player {
  player: IPlayer;
}

const AvailablePlayerCard = ({ player }: Player) => {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">

      {/* Player Image */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-48 w-full object-cover sm:h-52"
        />
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gray-800 shadow">
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

    </div>
  );
};

export default AvailablePlayerCard;