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
<p>This already looks like a table.</p>
<p>I'd suggest to format the table header with the proper element.</p>`,
    });
  },
} as task;
