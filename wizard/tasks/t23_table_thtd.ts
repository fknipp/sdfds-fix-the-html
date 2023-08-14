import messagebox from "../messagebox.js";
import { task } from "./index.js";

export default {
  condition: (d) =>
    d.querySelectorAll("table tr").length === 4 &&
    d.querySelectorAll("table tr th").length === 3 &&
    d.querySelectorAll("table tr td").length === 9,
  showMessage() {
    messagebox({
      html: `
<p>Excellent.</p>
<p>Check the dimensions of the table. It should consist of a header row and three data rows.</p>`,
    });
  },
} as task;
