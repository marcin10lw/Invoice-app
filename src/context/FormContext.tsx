import { Dispatch, PropsWithChildren, createContext, useState } from "react";

type FormContextState = {
  isFormOpen: boolean;
  setIsFormOpen: Dispatch<React.SetStateAction<boolean>>;
};

export const FormContext = createContext({} as FormContextState);

const FormProvider = ({ children }: PropsWithChildren) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <FormContext.Provider value={{ isFormOpen, setIsFormOpen }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
