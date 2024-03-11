import { Spin } from "components/common";
import { PATH } from "consts";
import { DashboardPage, NotFoundPage } from "pages";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RootState } from "store";

function App() {
  const { loading } = useSelector((store: RootState) => store.load);
  return (
    <BrowserRouter>
      {loading ? <Spin /> : null}
      <Routes>
        <Route path={PATH.DASHBOARD} element={<DashboardPage />} />
        <Route path={PATH.NOT_FOUND} element={<NotFoundPage />} />
        <Route
          path={PATH.INVALID_PATH}
          element={<Navigate to={PATH.NOT_FOUND} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
