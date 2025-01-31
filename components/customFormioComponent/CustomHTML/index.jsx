import React from "react";
import { Components } from "@formio/react";
import settingsForm from "./CustomSetting.form";

const HTMLComponent = Components.components.htmlelement;

export default class CustomHTML extends HTMLComponent {
  constructor(component, options, data) {
    super(component, options, data);
  }
  static get builderInfo() {
    return {
      title: "HTML Custom",
      icon: "fa-solid fa-code",
      group: "customINFOLayout",
      documentation: "",
      weight: -10,
      schema: CustomHTML.schema(),
    };
  }
  static schema(...extend) {
    return HTMLComponent.schema({
      type: "customHTMLV0_1",
      label: "",
      key: "customHTMLV0_1",
      title: "customHTMLV0_1",
      customClass: "customHTMLV0_1",
    });
  }

  static editForm = settingsForm;

  attach(element) {
    var _this65 = this;
    this.loadRefs(element, { html: "single" });

    try {
      const form = _this65.getRoot();
      if (!_this65?.builderMode) {
        _this65?.evaluate(_this65?.component?.customlogic, {
          form: form,
        });
      }
    } catch (e) {}
    this.addEventListener(this.refs.html, "click", (event) => {
      try {
        _this65.evaluate(_this65.component.JavascriptCode, {
          form: _this65.getRoot(),
          instance: _this65,
        });
      } catch (e) {
        console.error("Error :", e);
      }
      event.preventDefault();
    });
    return super.attach(element);
  }
}
