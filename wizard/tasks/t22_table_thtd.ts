import messagebox from "../messagebox.js";
import { task } from "./index.js";

export default {
  condition: (d) =>
  d.querySelectorAll("table tr").length > 1 &&
  d.querySelectorAll("table tr th").length > 1 &&
  d.querySelectorAll("table tr td").length > 1,
showMessage() {
    messagebox({
      html: `
<p>This already looks like a table.</p>
<p>I'd suggest to format table header and table data cells with the proper HTML elements.</p>`,
    });
  },
  ignoreInCounting: true,
} as task;
