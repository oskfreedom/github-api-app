import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { DashboardView } from "components/views";
import { AppActions, RootState } from "store";

export const DashboardContainer: React.FC = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState<string>("");
  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(AppActions.scan.getUserRequest(search));
  };

  const { users, repos } = useSelector((store: RootState) => store.scan);
  const openRepo = (name: string) => {
    dispatch(AppActions.scan.getRepoRequest(name));
  };
  return (
    <DashboardView
      SearchBarProps={{
        name: "Search",
        value: search,
        placeholder: "Enter username",
        onChange: onSearchChange,
        onSubmit: onSubmit,
      }}
      users={users}
      openRepo={openRepo}
      repo={repos}
    />
  );
};
