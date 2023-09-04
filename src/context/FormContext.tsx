import { Dispatch, PropsWithChildren, createContext, useState } from "react";

type FormType = "create" | "edit" | "idle";

type FormContextState = {
  isFormOpen: boolean;
  setIsFormOpen: Dispatch<React.SetStateAction<boolean>>;
  formType: FormType;
  setFormType: Dispatch<React.SetStateAction<FormType>>;
};

export const FormContext = createContext({} as FormContextState);

const FormProvider = ({ children }: PropsWithChildren) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<FormType>("idle");

  return (
    <FormContext.Provider
      value={{ isFormOpen, formType, setIsFormOpen, setFormType }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
