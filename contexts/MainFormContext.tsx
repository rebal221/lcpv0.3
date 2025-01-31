import { createContext, useContext, useState, useEffect } from "react";
import FormRenderer from "@/components/FormRenderer";
import { getMainForm } from "@/utils/getFunctions/getMainForm";

type MainFormContextType = string | null;

const MainFormContext = createContext<MainFormContextType>(null);

export function MainFormProvider({ children, initialForm }: any) {
  const [formHtml, setFormHtml] = useState<string | null>(null);
  const [Formio, setFormio] = useState<any>(null);
//   const mainForm = getMainForm(initialForm.publicToken);
//   if (!mainForm) throw new Error("Failed to fetch Main Form");
  return (
    <>
      <FormRenderer formSchema={{}} />
      <MainFormContext.Provider value={formHtml}>
        {children}
      </MainFormContext.Provider>
    </>
  );
}

export function useMainForm() {
  return useContext(MainFormContext);
}

// useEffect(() => {
//     console.log('Ensure window is available before importing Formio')
//     if (typeof window !== "undefined") {
//         import("formiojs").then((module) => {
//             setFormio(() => module.Formio); // Use a function to set the state
//         });
//     }
// }, []);

// useEffect(() => {
//     if (!Formio || !initialForm) return;

//     const renderForm = async () => {
//         const container = document.createElement("div");
//         await Formio.createForm(container, initialForm);
//         setFormHtml(container.innerHTML);
//     };

//     renderForm();
// }, [Formio, initialForm]);
