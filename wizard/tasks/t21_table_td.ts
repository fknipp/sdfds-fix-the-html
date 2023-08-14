import messagebox from "../messagebox.js";
import { task } from "./index.js";

export default {
  condition: (d) =>
    d.querySelectorAll("table tr td,table tr th").length > 1,
  showMessage() {
    messagebox({
      html: `
<p>You've done the first step, but it's not ready.</p>
<p>The <b>table</b> element is already in use, but you need to use <b>tr</b>, <b>th</b> and <b>td</td> as well.</p>
`,
    });
  },
  ignoreInCounting:true
} as task;
