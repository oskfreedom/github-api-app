import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { PAGE_HOME, PAGE_INVALID, PAGE_NOT_FOUND } from "const/path";
import NotFoundPage from "pages/NotFound";
import HomePage from "pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PAGE_HOME} element={<HomePage />} />
        <Route path={PAGE_NOT_FOUND} element={<NotFoundPage />} />
        <Route path={PAGE_INVALID} element={<Navigate to={PAGE_NOT_FOUND} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
