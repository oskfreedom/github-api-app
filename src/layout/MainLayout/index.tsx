import { HeaderBarContainer } from "containers/HeaderBar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-full relative">
      <HeaderBarContainer />
      <div className="w-full h-[calc(100vh-40px)] overflow-auto dark:bg-gray-950 bg-white transition-all">
        {children}
      </div>
    </div>
  );
};

export const withMainLayout =
  (Page: React.FC): React.FC =>
  () => {
    return (
      <MainLayout>
        <Page />
      </MainLayout>
    );
  };
