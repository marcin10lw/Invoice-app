import { Route, Routes } from "react-router-dom";

import Navigation from "./common/Navigation";
import InvoicesPage from "./pages/InvoicesPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<InvoicesPage />} />
      </Routes>
    </>
  );
}

export default App;
