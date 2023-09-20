import { Dispatch, PropsWithChildren, createContext, useState } from "react";

type FormType = "create" | "edit" | "idle";

type FormContextState = {
  isFormOpen: boolean;
  formType: FormType;
  setFormType: Dispatch<React.SetStateAction<FormType>>;
  openFormMenu: () => void;
  closeFormMenu: () => void;
};

export const FormContext = createContext({} as FormContextState);

const FormProvider = ({ children }: PropsWithChildren) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<FormType>("idle");

  const openFormMenu = () => setIsFormOpen(true);

  const closeFormMenu = () => setIsFormOpen(false);

  return (
    <FormContext.Provider
      value={{ isFormOpen, formType, setFormType, openFormMenu, closeFormMenu }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
