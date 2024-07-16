import { Route, Routes } from "react-router-dom";
import DeletePage from "./Pages/DeleteAccount/DeletePage";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={PrivacyPolicy} />
        <Route path="/delete-account" Component={DeletePage} />
      </Routes>
    </>
  );
}

export default App;
