import Switcher from "utils/Switcher";

export const HeaderBarView: React.FC = () => {
  return (
    <div className="w-full min-h-10 font-bold bg-blue-500 flex">
      <h1 className="text-2xl m-auto">Simple System</h1>
      <div className="flex items-center gap-2 pr-3">
        <Switcher />
      </div>
    </div>
  );
};
