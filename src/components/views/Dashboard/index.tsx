import {
  SearchBarComponent,
  SearchBarProps,
  UserListComponent,
} from "components/common";
import { IRepo } from "types";

interface DasboardProps {
  SearchBarProps: SearchBarProps;
  users: string[];
  openRepo: (name: string) => void;
  repo: {
    [key: string]: IRepo[];
  };
}

export const DashboardView: React.FC<DasboardProps> = ({
  SearchBarProps,
  users,
  openRepo,
  repo,
}) => {
  return (
    <div className="w-full h-full p-5 flex flex-col items-center justify-start gap-5">
      <div className="w-1/2 desktop:w-2/3 laptop:w-3/4 tablet:w-4/5 mobile:w-full flex flex-col gap-5">
        <SearchBarComponent {...SearchBarProps} />
        <div className="w-full ease-in-out transition-all transform duration-300 flex flex-col gap-5">
          {users.map((user, index) => {
            return (
              <UserListComponent
                name={user}
                openRepo={openRepo}
                key={index}
                repo={repo[user]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
