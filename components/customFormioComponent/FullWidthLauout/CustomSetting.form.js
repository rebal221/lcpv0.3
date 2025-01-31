import baseEditForm from "formiojs/components/_classes/component/Component.form";

export default (...extend) => {
  return baseEditForm(
    [
      {
        key: "display",
        components: [
          {
            type: "textfield",
            input: true,
            label: "Component ID",
            key: "componentID",
            weight: 2,
            description:
              "Component ID to display the content within, if empty, the content will be displayed in the middle column",
          },
        ],
      },
      {
        key: "data",
        components: [],
      },
      {
        key: "validation",
        components: [],
      },
      {
        key: "api",
        components: [],
      },
      {
        key: "conditional",
        components: [],
      },
      {
        key: "logic",
        components: [],
      },
    ],
    ...extend,
  );
};
