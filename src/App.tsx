import { Navigate, Route, Routes } from "react-router-dom";

import Navigation from "./common/Navigation";
import InvoicesPage from "./pages/InvoicesPage";
import InvoicePage from "pages/InvoicePage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/invoices" />} />
        <Route path="/invoices" element={<InvoicesPage />} />
        <Route path="invoices/:id" element={<InvoicePage />} />
      </Routes>
    </>
  );
}

export default App;
