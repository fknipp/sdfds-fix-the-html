import messagebox from "../messagebox.js";
import { task } from "./index.js";

export default {
  condition: (d) =>
    !!d.querySelector("table"),
  showMessage() {
    messagebox({
      html: `
<p>The quote looks really good.</p>
<p>Do you see the tabular content? Well, we can read it, but it's not as HTMLy as it should be</p>
<p>Try to create a proper HTML table!</p>`,
    });
  },
  ignoreInCounting:true
} as task;
