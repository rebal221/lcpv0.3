import baseEditForm from "formiojs/components/_classes/component/Component.form";

export default (...extend) => {
  return baseEditForm(
    [
      {
        key: "display",
        components: [
          {
            type: "textarea",
            key: "customlogic",
            label: "Javascript Code.",
            tooltip: "The custom logic to evaluate when the button is clicked.",
            rows: 20,
            editor: "ace",
            input: true,
            weight: 81,
            placeholder: "data['mykey'] = data['anotherKey'];",
          },
          {
            type: "textarea",
            key: "JavascriptCode",
            label: "On Click Component Custom Code",
            tooltip: "On Click Component Custom Code",
            rows: 5,
            editor: "ace",
            input: true,
            weight: 1298,
            placeholder: "data['mykey'] = data['anotherKey'];",
          },
          {
            type: "textfield",
            input: true,
            key: "tag",
            weight: 50,
            label: "HTML Tag",
            placeholder: "HTML Element Tag",
            tooltip: "The tag of this HTML element.",
          },
          {
            type: "textfield",
            input: true,
            key: "className",
            weight: 60,
            label: "CSS Class",
            placeholder: "CSS Class",
            tooltip: "The CSS class for this HTML element.",
          },
          {
            type: "datagrid",
            input: true,
            label: "Attributes",
            key: "attrs",
            tooltip:
              "The attributes for this HTML element. Only safe attributes are allowed, such as src, href, and title.",
            weight: 70,
            components: [
              {
                label: "Attribute",
                key: "attr",
                input: true,
                type: "textfield",
              },
              {
                label: "Value",
                key: "value",
                input: true,
                type: "textfield",
              },
            ],
          },
          {
            type: "textarea",
            input: true,
            editor: "ace",
            rows: 10,
            as: "html",
            label: "Content",
            tooltip: "The content of this HTML element.",
            defaultValue: '<div class="well">Content</div>',
            key: "content",
            weight: 80,
          },
          {
            weight: 85,
            type: "checkbox",
            label: "Refresh On Change",
            tooltip: "Rerender the field whenever a value on the form changes.",
            key: "refreshOnChange",
            input: true,
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
    ...extend
  );
};
