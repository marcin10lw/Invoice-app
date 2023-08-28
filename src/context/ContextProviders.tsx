import { PropsWithChildren } from "react";

import ThemeProvider from "./ThemeContext";
import FormProvider from "./FormContext";

const ContextProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <FormProvider>{children}</FormProvider>
    </ThemeProvider>
  );
};

export default ContextProviders;
