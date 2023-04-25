import { Form } from "./form/form";
import { formConfig } from "./state/form-config";
import { formState } from "./state/form-state";
import { Page } from "./style";

export const App =()=> {
  return (
   <Page><Form formConfig={formConfig} formState={formState}/></Page>
  );
}
