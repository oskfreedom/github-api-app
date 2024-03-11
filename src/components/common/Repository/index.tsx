import { IRepo } from "types";
import { GoStarFill } from "react-icons/go";

export const RepositoryComponent: React.FC<IRepo> = ({
  name,
  description,
  stargazers_count,
}) => {
  return (
    <div className="w-full dark:bg-black bg-gray-300 dark:text-white text-black p-3 rounded-md flex flex-col">
      <div className="flex justify-between items-center">
        <p className="font-bold text-2xl">{name}</p>
        <div className="flex items-center gap-1">
          <p className="font-semibold text-xl">{stargazers_count}</p>
          <GoStarFill />
        </div>
      </div>
      <p className="font-semibold text-lg">{description}</p>
    </div>
  );
};
