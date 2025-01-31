/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  "use strict";

  document.addEventListener("DOMContentLoaded", (event) => {
    const htmlElement = document.documentElement;
    const switchElement = document.getElementById("darkModeSwitch");
    const currentTheme = localStorage.getItem("bsTheme") || "light";
    htmlElement.setAttribute("data-bs-theme", currentTheme);
    if (switchElement) {
      // Set the default theme to dark if no setting is found in local storage

      switchElement.checked = currentTheme === "dark";

      switchElement.addEventListener("change", function () {
        if (this.checked) {
          htmlElement.setAttribute("data-bs-theme", "dark");
          localStorage.setItem("bsTheme", "dark");
        } else {
          htmlElement.setAttribute("data-bs-theme", "light");
          localStorage.setItem("bsTheme", "light");
        }
      });
    }
  });
})();
