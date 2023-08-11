import messagebox from "../messagebox.js";
import { task } from "./index.js";

export default {
  condition: (d) =>
    !!d
      .querySelector("main > blockquote")
      ?.textContent?.match(/Dreams are necessary to life./),
  showMessage() {
    messagebox({
      html: `
<p>The <b>blockquote</b> element is fine, but it shouldn't be placed inside the <b>p</b> element.</p>
<p>Save the file after fixing it.</p>`,
    });
  },
} as task;
