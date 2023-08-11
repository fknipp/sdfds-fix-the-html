import messagebox from "../messagebox.js";
import { task } from "./index.js";

export default {
  condition: (d) =>
    !!d.querySelector("q,blockquote")?.textContent?.match(/Dreams are necessary to life./),
  showMessage() {
    messagebox({
      html: `
<p>Well done!</p>
<p>There is a quote in the document. Put it in the proper element.</p>
<p>Save the file after fixing it.</p>`,
    });
  },
  ignoreInCounting: true,
} as task;
