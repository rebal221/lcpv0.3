import React from "react";
import { Components } from "@formio/react";
import settingsForm from "./CustomSetting.form";

const ColumnsComponent = Components.components.columns;
const navigate_channel = new BroadcastChannel(process.env.NAVIGATE_CHANNEL);
const loading_channel = new BroadcastChannel(process.env.LOADING_CHANNEL);

export default class CustomFullWidthLayout extends ColumnsComponent {
  constructor(component, options, data) {
    super(component, options, data);
    this.state = {
      componentSettings: component,
    };
  }

  static get builderInfo() {
    return {
      title: "Full Width Box",
      icon: "fa-thin fa-table-layout",
      group: "customINFOLayout",
      documentation: "",
      weight: -10,
      schema: CustomFullWidthLayout.schema(),
    };
  }

  static schema(...extend) {
    return ColumnsComponent.schema({
      type: "customFullWidthLayoutV0_1",
      label: "",
      key: "",
      title: "customFullWidthLayoutV0_1",
      customClass: "customFullWidthLayoutV0_1",
      columns: [
        {
          components: [],
          width: 12,
          offset: 0,
          push: 0,
          pull: 0,
          size: "md",
        },
        {
          components: [],
          width: 12,
          offset: 0,
          push: 0,
          pull: 0,
          size: "md",
        },
        {
          components: [],
          width: 12,
          offset: 0,
          push: 0,
          pull: 0,
          size: "md",
        },
      ],
    });
  }

  async pushForm(formName, project, pagePath, type, isAdmin, id) {
    if (type === "form") {
      try {
        window.parent.postMessage({ type: "loading", value: true });

        const token =
          localStorage.getItem("token") ||
          window.appStore.getState().dummyToken.token;

        const response = await fetch(
          `/lookup/api/v1/openForm?name=${formName}&tableName=${project}&view=true`,
          {
            method: "GET",
            headers: {
              deviceId: window.platform.visitorData.visitorId,
              Authorization: `Bearer ${token}`,
              formId: formName,
              formName: "get Component in full width custom component",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        const decodedURIComponent = atob(data.data);

        if (data.data) {
          const decodedJsonString = decodeURIComponent(decodedURIComponent);
          const decodedJson = JSON.parse(decodedJsonString);
          this.getRoot().root.data["formViews"] = data.views ?? 0;
          if (this.component.componentID && this.component.componentID !== "") {
            this.getRoot().getComponent(
              this.component.componentID
            ).component.components = decodedJson.components;
          } else {
            const updatedColumns = [...this.component.columns];
            updatedColumns[1] = {
              ...updatedColumns[1],
              components: decodedJson.components,
            };
            this.component.columns = updatedColumns;
          }

          localStorage.removeItem("page_details_to_open");
          this.refresh();
          this.rebuild();
        } else {
          window.parent.postMessage({
            type: "NAVIGATE_SHORT",
            route: {
              formName: "404",
            },
          });
        }
        window.parent.postMessage({ type: "loading", value: false });
      } catch (error) {
        console.error("Error fetching data:", error);
        window.parent.postMessage({ type: "loading", value: false });
      }
    }
  }

  static editForm = settingsForm;
  attach(element) {
    const attachedElement = super.attach(element);
    if (
      localStorage.getItem("page_details_to_open") &&
      !this.builderMode &&
      (this.component.columns[1].components.length == 0 ||
        this.component.componentID)
    ) {
      this.handleMessage(
        JSON.parse(localStorage.getItem("page_details_to_open"))
      );
    }
    return attachedElement;
  }
  handleMessage(event) {
    if (event.type === "pushForm") {
      this.pushForm(
        event.route.formName,
        event.route.project,
        event.route.pagePath,
        event.route.type,
        event.route.isAdmin,
        event.route.id
      );
    } else if (event.data.type === "getFormTO") {
      const form = this.getRoot();
      this.getFormTO(
        form,
        event.data.component,
        event.data.route.formName,
        event.data.route.project,
        event.data.route.parentPath,
        event.data.route.pagePath,
        event.data.route.type
      );
    }
  }

  async getFormTO(
    form,
    componentKey,
    formName,
    project,
    position,
    pagePath,
    type
  ) {
    if (type === "form") {
      try {
        const response = await fetch(
          `/lookup/api/v1/openForm?name=${formName}&tableName=${project}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const decodedURIComponent = atob(data.data);
        const decodedJsonString = decodeURIComponent(decodedURIComponent);
        const decodedJson = JSON.parse(decodedJsonString);

        this.getComponent(componentKey).component.components =
          decodedJson.components;

        this.rebuild();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  }
}
