import messagebox from "../messagebox.js";
import { task } from "./index.js";

export default {
  condition: (d) =>
    !!(
      d.querySelector("footer p b,footer p strong") as HTMLHeadingElement
    )?.innerText.match(/The bigger, the better./),
  showMessage(d) {
    messagebox({
      html: `
<p>Only one task is missing.</p>
<p>Fix the final statement in the footer.</p>`,
    });
  },
  ignoreInCounting: true,
} as task;
