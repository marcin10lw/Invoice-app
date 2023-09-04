import { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { FormContext } from "context/FormContext";
import Navigation from "./common/Navigation";
import InvoicesPage from "./pages/InvoicesPage";
import InvoicePage from "pages/InvoicePage";
import Form from "common/Form";

function App() {
  const { isFormOpen } = useContext(FormContext);

  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isFormOpen]);

  return (
    <>
      <Navigation />
      <Form />
      <Routes>
        <Route path="/" element={<Navigate to="/invoices" />} />
        <Route path="/invoices" element={<InvoicesPage />} />
        <Route path="invoices/:id" element={<InvoicePage />} />
      </Routes>
    </>
  );
}

export default App;
