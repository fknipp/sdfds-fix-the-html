import messagebox from "../messagebox.js";
import { task } from "./index.js";

export default {
  condition: (d) =>
    !!d.querySelector("footer"),
  showMessage() {
    messagebox({
      html: `
<p>Hooray! Only a few steps are missing to solve this.</p>
<p>A HTML document usually has a <b>head</b> element, but what is a <b>foot</b> element?</p>
<p>Maybe, this is only some kind of a typo and easy to fix.</p>`,
    });
  },
  ignoreInCounting:true
} as task;
