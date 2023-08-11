import messagebox from "../messagebox.js";
import { task } from "./index.js";

export default {
  condition: (d) =>
    !!d
      .querySelector("blockquote")
      ?.textContent?.match(/Dreams are necessary to life./),
  showMessage() {
    messagebox({
      html: `
<p>The <b>q</b> element is for inline quotes, but this is a whole paragraph.</p>
<p>Check, if you find a better element.</p>
<p>Save the file after fixing it.</p>`,
    });
  },
  ignoreInCounting: true,
} as task;
