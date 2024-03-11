import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IRepo } from "types";
import { RepositoryComponent } from "..";

interface UserProps {
  name: string;
  openRepo: (name: string) => void;
  repo: IRepo[] | undefined;
}

export const UserListComponent: React.FC<UserProps> = ({
  name,
  openRepo,
  repo,
}) => {
  const [select, setSelect] = useState<boolean>(false);
  const repoHeight = useRef<HTMLDivElement>(null);
  const onClick = () => {
    if (repo === undefined) openRepo(name);
    setSelect(!select);
  };
  useEffect(() => {
    if (repoHeight.current)
      repoHeight.current.style.maxHeight = !select
        ? "0px"
        : repoHeight.current.scrollHeight + "px";
  }, [select, repo]);
  return (
    <div className="w-full flex flex-col gap-1 relative">
      <button
        onClick={onClick}
        className="z-10 w-full bg-gray-500 rounded-md text-white p-2 flex items-center justify-between cursor-pointer hover:bg-gray-600 transition-all"
      >
        <p>{name}</p>
        <IoIosArrowDown
          className={`fill-white ${!select ? "" : "rotate-180"} transition-all`}
        />
      </button>
      <div
        ref={repoHeight}
        id="repo"
        className={`flex flex-col gap-1 transition-max-height duration-300 overflow-hidden`}
      >
        {repo &&
          repo.map((item, index) => {
            return (
              <RepositoryComponent
                key={index}
                name={item.name}
                description={item.description}
                stargazers_count={item.stargazers_count}
              />
            );
          })}
      </div>
    </div>
  );
};
