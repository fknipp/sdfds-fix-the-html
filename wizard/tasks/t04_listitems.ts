import messagebox from "../messagebox.js";
import { task } from "./index.js";

export default {
  condition: (d) => d.querySelectorAll("ul li,ol li").length === 3,
  showMessage() {
    messagebox({
      html: `
<p>You've created a list, but the list items are not available yet.</p>
<p>Save the file after fixing it.</p>`,
    });
  },
} as task;
