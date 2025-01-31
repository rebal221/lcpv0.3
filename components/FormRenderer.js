import dynamic from "next/dynamic";
import { useEffect } from "react";

const Form = dynamic(() => import("@formio/react").then((mod) => mod.Form), {
  ssr: false,
});

const FormRenderer = ({ formSchema }) => {
  let x = 0
  console.log(formSchema);
  useEffect(() => {
    console.log("222222222222222222",x);
  }, [x]);
  x = 1
  return (
    <div>
      ccc
      {/* <Form
        form={{
          components: [
            {
              type: "button",
              label: "Submit",
              key: "submit",
              size: "md",
              block: false,
              action: "submit",
              disableOnInvalid: true,
              theme: "primary",
              id: "entrxch",
              input: true,
              placeholder: "",
              prefix: "",
              customClass: "",
              suffix: "",
              multiple: false,
              defaultValue: null,
              protected: false,
              unique: false,
              persistent: false,
              hidden: false,
              clearOnHide: true,
              refreshOn: "",
              redrawOn: "",
              tableView: false,
              modalEdit: false,
              dataGridLabel: true,
              labelPosition: "top",
              description: "",
              errorLabel: "",
              tooltip: "",
              hideLabel: false,
              tabindex: "",
              disabled: false,
              autofocus: false,
              dbIndex: false,
              customDefaultValue: "",
              calculateValue: "",
              calculateServer: false,
              widget: { type: "input" },
              attributes: {},
              validateOn: "change",
              validate: {
                required: false,
                custom: "",
                customPrivate: false,
                strictDateValidation: false,
                multiple: false,
                unique: false,
              },
              conditional: { show: null, when: null, eq: "" },
              overlay: { style: "", left: "", top: "", width: "", height: "" },
              allowCalculateOverride: false,
              encrypted: false,
              showCharCount: false,
              showWordCount: false,
              properties: {},
              allowMultipleMasks: false,
              addons: [],
              leftIcon: "",
              rightIcon: "",
            },
          ],
        }}
        // src="https://pgtdbrutblojpif.form.io/admin/login"
        onSubmit={(submission) => console.log(submission)}
      /> */}
    </div>
  );
};

export default FormRenderer;
